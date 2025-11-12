<template>
    <div class="min-h-screen bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-white p-6">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-4">
                    <img :src="user.avatar || defaultAvatar" alt="avatar"
                        class="w-16 h-16 rounded-full ring-2 ring-[#3B82F6]" />
                    <div>
                        <h1 class="text-2xl font-semibold">{{ user.display_name }}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-300">@{{ user.username }} · Joined {{
                            formatDate(user.joined_at) }}</p>
                    </div>
                </div>

                <div class="text-right">
                    <p class="text-sm text-gray-500 dark:text-gray-300">Last active</p>
                    <p class="text-lg font-medium">{{ relativeTime(user.last_active) }}</p>
                </div>
            </div>

            <!-- Overview Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total messages" :value="stats.total_messages" icon="💬" />
                <StatCard title="Commands used" :value="stats.unique_commands" icon="⚙️" />
                <StatCard title="Tasks completed" :value="stats.tasks_completed" icon="✅" />
                <StatCard title="Streak (days)" :value="stats.streak_days" icon="🔥" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Left -- Charts -->
                <div class="lg:col-span-2 space-y-6">
                    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
                        <h2 class="text-lg font-semibold mb-2">Activity — Last 30 days</h2>
                        <canvas id="messagesLineChart" height="120"></canvas>
                    </div>

                    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
                        <h2 class="text-lg font-semibold mb-2">Command Usage</h2>
                        <canvas id="commandsPieChart" height="140"></canvas>
                    </div>
                </div>

                <!-- Right -- Profile details & badges -->
                <div class="space-y-6">
                    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
                        <h3 class="font-semibold mb-2">Profile</h3>
                        <dl class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                            <div class="flex justify-between">
                                <dt>ID</dt>
                                <dd>{{ user.id }}</dd>
                            </div>
                            <div class="flex justify-between">
                                <dt>Phone</dt>
                                <dd>{{ user.phone || 'N/A' }}</dd>
                            </div>
                            <div class="flex justify-between">
                                <dt>Language</dt>
                                <dd>{{ user.language_code || 'N/A' }}</dd>
                            </div>
                            <div class="flex justify-between">
                                <dt>Average Score</dt>
                                <dd>{{ stats.average_score }}%</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
                        <h3 class="font-semibold mb-3">Badges</h3>
                        <div class="flex flex-wrap gap-2">
                            <Badge v-for="(b, i) in badges" :key="i" :badge="b" />
                        </div>
                    </div>

                    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
                        <h3 class="font-semibold mb-3">Recent Activity</h3>
                        <ul class="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                            <li v-for="(a, i) in recent_activity" :key="i"
                                class="border-b border-gray-100 dark:border-gray-800 pb-2">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <p class="font-medium">{{ a.title }}</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ formatDate(a.at) }}</p>
                                    </div>
                                    <div class="text-sm text-gray-500">{{ a.meta }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Footer quick actions -->
            <div class="mt-6 flex gap-3">
                <button @click="refresh"
                    class="px-4 py-2 bg-[#1E40AF] hover:bg-[#1E3AA8] text-white rounded-lg">Refresh</button>
                <a :href="profileLink" target="_blank"
                    class="px-4 py-2 bg-white dark:bg-[#122033] border dark:border-gray-700 rounded-lg">Open in web
                    app</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// Components
const StatCard = {
    props: ['title', 'value', 'icon'],
    template: `
    <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-300">{{ title }}</p>
        <p class="text-2xl font-semibold">{{ value }}</p>
      </div>
      <div class="text-3xl">{{ icon }}</div>
    </div>
  `
};

const Badge = {
    props: ['badge'],
    template: `
    <span class="px-3 py-1 rounded-full text-sm font-medium border dark:border-gray-800" :class="badgeClass(badge)">
      {{ badge.name }}
    </span>
  `,
    methods: {
        badgeClass(b) {
            if (b.tier === 'gold') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-[#0F172A]';
            if (b.tier === 'silver') return 'bg-gray-100 text-gray-800 dark:bg-gray-700';
            return 'bg-[#EFF6FF] text-[#1E40AF] dark:bg-[#102A4A]';
        }
    }
};

// Mock / placeholders
const defaultAvatar = 'https://www.gravatar.com/avatar/?d=identicon';

// Reactive data
const userId = new URLSearchParams(window.location.search).get('id') || '12345';
const user = ref({
    id: userId,
    display_name: 'Loading...',
    username: '',
    avatar: null,
    phone: null,
    language_code: null,
    joined_at: null,
    last_active: null,
});

const stats = ref({
    total_messages: 0,
    unique_commands: 0,
    tasks_completed: 0,
    streak_days: 0,
    average_score: 0,
});

const badges = ref([]);
const recent_activity = ref([]);

const profileLink = ref(`${window.location.origin}/webapp?id=${userId}`);

function formatDate(iso) {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleString();
}

function relativeTime(iso) {
    if (!iso) return '-';
    const diff = Date.now() - new Date(iso).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
}

// Fetch function — expects your backend to expose `/api/user/:id/stats`
async function fetchStats() {
    try {
        const res = await fetch(`/api/user/${userId}/stats`);
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();

        // Map data into the UI model (adjust according to your API)
        user.value = { ...user.value, ...data.user };
        stats.value = { ...stats.value, ...data.stats };
        badges.value = data.badges || [];
        recent_activity.value = data.recent_activity || [];

        // Draw charts
        drawMessagesChart(data.metrics.last_30_days || []);
        drawCommandsChart(data.metrics.commands || {});
    } catch (err) {
        console.error('Failed to fetch stats', err);
        // Fallback: mock data for demo
        loadMockData();
    }
}

function loadMockData() {
    user.value = {
        id: userId,
        display_name: 'Anvar Saidov',
        username: 'anvar_s',
        avatar: defaultAvatar,
        phone: '+998901234567',
        language_code: 'en',
        joined_at: '2025-03-09T12:00:00Z',
        last_active: new Date().toISOString(),
    };
    stats.value = { total_messages: 243, unique_commands: 12, tasks_completed: 47, streak_days: 6, average_score: 86 };
    badges.value = [{ name: 'Early Adopter', tier: 'gold' }, { name: '100 Messages', tier: 'silver' }, { name: 'Quiz Master', tier: 'bronze' }];
    recent_activity.value = [
        { title: 'Completed "Quiz #12" (90%)', at: new Date().toISOString(), meta: '90%' },
        { title: 'Used /stats', at: new Date(Date.now() - 3600 * 1000 * 24).toISOString(), meta: '' },
    ];

    const mockLast30 = Array.from({ length: 30 }, (_, i) => ({ date: daysAgoLabel(29 - i), value: Math.floor(Math.random() * 10) }));
    const mockCommands = { '/start': 40, '/quiz': 70, '/help': 20, '/stats': 30 };
    drawMessagesChart(mockLast30);
    drawCommandsChart(mockCommands);
}

function daysAgoLabel(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().slice(0, 10);
}

// Charts
let messagesChart = null;
let commandsChart = null;

function drawMessagesChart(points) {
    const ctx = document.getElementById('messagesLineChart');
    if (!ctx) return;
    const labels = points.map(p => p.date);
    const data = points.map(p => p.value);

    if (messagesChart) messagesChart.destroy();

    messagesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Messages',
                    data,
                    tension: 0.35,
                    fill: true,
                    backgroundColor: 'rgba(59,130,246,0.12)',
                    borderColor: '#3B82F6',
                    pointRadius: 2,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { grid: { display: false } } },
        },
    });
}

function drawCommandsChart(commands) {
    const ctx = document.getElementById('commandsPieChart');
    if (!ctx) return;
    const labels = Object.keys(commands);
    const data = Object.values(commands);

    if (commandsChart) commandsChart.destroy();

    commandsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels,
            datasets: [
                {
                    data,
                    backgroundColor: [
                        '#3B82F6',
                        '#1E40AF',
                        '#16A34A',
                        '#FACC15',
                        '#EF4444',
                    ],
                },
            ],
        },
        options: { responsive: true, maintainAspectRatio: false },
    });
}

async function refresh() {
    await fetchStats();
}

onMounted(() => {
    // Attempt to fetch real data; falls back to mock
    fetchStats();
});
</script>

<style scoped>
/* Scoped tweaks (Tailwind handles most styles) */
canvas {
    width: 100% !important;
}
</style>
