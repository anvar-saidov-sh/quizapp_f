<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 flex flex-col">
        <!-- User Info Card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
                <span class="text-sm px-3 py-1 bg-blue-600 text-white rounded-full">{{ user.rank }}</span>
            </div>

            <div>
                <p class="text-gray-500 dark:text-gray-400 mb-2">Accuracy</p>
                <div class="flex items-end gap-2">
                    <span class="text-4xl font-bold text-blue-500">{{ user.accuracy }}%</span>
                </div>

                <div class="flex justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Submitted: <strong class="text-gray-800 dark:text-gray-200">{{ user.submitted
                            }}</strong></span>
                    <span>Correct: <strong class="text-gray-800 dark:text-gray-200">{{ user.correct }}</strong></span>
                </div>

                <div class="mt-4 text-sm">
                    <span class="text-gray-500">Level:</span>
                    <span class="ml-2 px-3 py-1 bg-green-600/20 text-green-600 rounded-full">{{ user.level }}</span>
                </div>
            </div>
        </div>

        <!-- Performance Charts -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-5">
            <h2 class="text-lg font-semibold mb-4">Performance</h2>

            <div class="grid grid-cols-2 gap-6 items-center">
                <div class="h-56 flex items-center justify-center">
                    <Bar :data="barData" :options="barOptions" />
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-28 h-28">
                        <Doughnut :data="completionData" :options="chartOptions" />
                    </div>
                    <p class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">Completion</p>
                </div>
            </div>

        </div>

        <!-- Bottom Buttons -->
        <div class="flex justify-end gap-4 mt-4 w-full ">
            <router-link to="/stats"
                class="bg-blue-600 hover:bg-blue-700 text-white  font-medium py-2 rounded-xl transition cursor-pointer flex justify-center w-[200px]">
                Stats
            </router-link>

            <router-link to="/squad"
                class="bg-gray-700 hover:bg-gray-800 text-white font-medium  py-2 rounded-xl transition cursor-pointer flex justify-center w-[200px]">
                Squad
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Bar } from 'vue-chartjs'
import {
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const user = {
    name: "John Doe",
    rank: "Master",
    accuracy: 80,
    submitted: 100,
    correct: 80,
    level: "Junior"
}

const accuracyData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
        {
            data: [80, 20],
            backgroundColor: ['#16A34A', '#FF0000'],
            borderWidth: 0,
            cutout: '70%'
        }
    ]
}

const completionData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
        {
            data: [60, 40],
            backgroundColor: ['#16A34A', '#E5E7EB'],
            borderWidth: 0,
            cutout: '70%'
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
    }
}

const incorrect = user.submitted - user.correct

const barData = {
    labels: ['Submissions'],
    datasets: [
        {
            label: 'Submitted',
            data: [user.submitted],
            backgroundColor: '#3B82F6',
            borderRadius: 6,
            // barThickness: 25,
            barPercentage: 0.4,
            categoryPercentage: 0.5,
        },
        {
            label: 'Correct',
            data: [user.correct],
            backgroundColor: '#16A34A',
            borderRadius: 6,
            // barThickness: 25,
            barPercentage: 0.4,
            categoryPercentage: 0.5,
        },
        {
            label: 'Incorrect',
            data: [incorrect],
            backgroundColor: '#EF4444',
            borderRadius: 6,
            // barThickness: 25,
            barPercentage: 0.4,
            categoryPercentage: 0.5,
        },
    ],
}

const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700, easing: 'easeOutQuart' },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(229, 231, 235, 0.2)',
            },
            ticks: {
                color: '#9CA3AF',
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#9CA3AF',
            },
        },
    },
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#9CA3AF',
            },
        },
        tooltip: {
            enabled: true,
        },
    },
}
</script>

<style scoped>
button {
    letter-spacing: 0.3px;
    touch-action: manipulation;
}
</style>
