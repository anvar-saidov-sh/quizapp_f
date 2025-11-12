<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-white p-6">
    <div class="max-w-2xl mx-auto space-y-6">
      <div class="flex items-center gap-4">
        <img :src="user.avatar || defaultAvatar" alt="avatar" class="w-14 h-14 rounded-full ring-2 ring-[#3B82F6]" />
        <div>
          <h1 class="text-xl font-semibold">{{ user.display_name }}</h1>
          <p class="text-sm text-gray-500">@{{ user.username }} · Joined {{ formatDate(user.joined_at) }}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard title="Messages" :value="stats.total_messages" icon="💬" />
        <StatCard title="Commands" :value="stats.unique_commands" icon="⚙️" />
        <StatCard title="Tasks" :value="stats.tasks_completed" icon="✅" />
        <StatCard title="Streak" :value="stats.streak_days" icon="🔥" />
      </div>

      <div class="bg-white dark:bg-[#0B1220] p-4 rounded-2xl shadow-sm">
        <h2 class="font-semibold mb-2">Recent Activity</h2>
        <ul class="text-sm space-y-2">
          <li v-for="(a,i) in recent_activity" :key="i" class="border-b border-gray-200 dark:border-gray-700 pb-2">
            <p class="font-medium">{{ a.title }}</p>
            <p class="text-xs text-gray-500">{{ formatDate(a.at) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const StatCard = {
  props: ['title', 'value', 'icon'],
  template: `<div class='bg-white dark:bg-[#0B1220] p-3 rounded-xl shadow-sm text-center'>
               <div class='text-2xl'>{{ icon }}</div>
               <p class='text-sm text-gray-500'>{{ title }}</p>
               <p class='text-lg font-semibold'>{{ value }}</p>
             </div>`
};

const defaultAvatar = 'https://www.gravatar.com/avatar/?d=identicon';
const user = ref({ display_name: 'Anvar Saidov', username: 'anvar_s', joined_at: '2025-03-09T12:00:00Z', avatar: defaultAvatar });
const stats = ref({ total_messages: 243, unique_commands: 12, tasks_completed: 47, streak_days: 6 });
const recent_activity = ref([
  { title: 'Completed "Quiz #12" (90%)', at: new Date().toISOString() },
  { title: 'Used /stats', at: new Date(Date.now() - 86400000).toISOString() }
]);

function formatDate(iso) {
  if (!iso) return '-';
  const d = new Date(iso);
  return d.toLocaleString();
}

onMounted(() => {});
</script>

<style scoped>
canvas { width: 100% !important; }
</style>
