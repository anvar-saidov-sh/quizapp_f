<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 p-6">
    <div class="max-w-3xl mx-auto space-y-6">

      <!-- User Info -->
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 flex items-center space-x-4">
        <img
          :src="user.avatar"
          alt="Avatar"
          class="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 class="text-2xl font-semibold">{{ user.first_name }} {{ user.last_name }}</h2>
          <p class="text-gray-500">@{{ user.username }}</p>
          <p class="text-sm text-gray-400">Joined {{ user.joined }}</p>
        </div>
      </div>

      <!-- Key Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow text-center">
          <p class="text-2xl font-bold">{{ stat.value }}</p>
          <p class="text-sm text-gray-500">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Badges -->
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Achievements</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="badge in badges"
            :key="badge.name"
            class="px-3 py-1 text-sm rounded-full font-medium"
            :class="badge.color"
          >
            {{ badge.name }}
          </span>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul class="space-y-3">
          <li v-for="activity in recentActivity" :key="activity.id" class="text-sm">
            <span class="font-medium">{{ activity.title }}</span>
            <span class="text-gray-500"> — {{ activity.date }}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
const user = {
  avatar: "https://i.pravatar.cc/150?img=33",
  first_name: "Anvar",
  last_name: "Saidov",
  username: "anvar_s",
  joined: "July 2024",
};

const stats = [
  { label: "Submissions Sent", value: 243 },
  { label: "Days Active", value: 127 },
  { label: "Points Acquired", value: 250 },
  { label: "Rank", value: 420 },
];

const badges = [
  { name: "Early Adopter", color: "bg-blue-100 text-blue-700 dark:bg-blue-700/30 dark:text-blue-300" },
  { name: "Active User", color: "bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300" },
  { name: "Verified", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-300" },
];

const recentActivity = [
  { id: 1, title: "Completed registration", date: "2 days ago" },
  { id: 2, title: "Opened web app", date: "3 days ago" },
  { id: 3, title: "Shared contact info", date: "1 week ago" },
];
</script>

<style scoped>
</style>
