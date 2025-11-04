import { BarChart3, Package, ShoppingCart, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

// Fake data for demonstration
const stats = [
    {
        id: 1,
        title: "کل سفارشات",
        value: "1,245",
        icon: ShoppingCart,
        change: "+12%",
        changeType: "increase" // یا decrease
    },
    {
        id: 2,
        title: "کاربران",
        value: "845",
        icon: Users,
        change: "+8%",
        changeType: "increase"
    },
    {
        id: 3,
        title: "محصولات",
        value: "378",
        icon: Package,
        change: "+24%",
        changeType: "increase"
    },
    {
        id: 4,
        title: "درآمد این ماه",
        value: "12.4M",
        icon: BarChart3,
        change: "+18%",
        changeType: "increase"
    }
];

// داده‌های نمودار فروش ماهانه
const salesData = [
    { name: "فروردین", فروش: 12000000 },
    { name: "اردیبهشت", فروش: 19000000 },
    { name: "خرداد", فروش: 15000000 },
    { name: "تیر", فروش: 25000000 },
    { name: "مرداد", فروش: 32000000 },
    { name: "شهریور", فروش: 28000000 },
    { name: "مهر", فروش: 35000000 },
    { name: "آبان", فروش: 42000000 },
];

// داده‌های نمودار دسته‌بندی محصولات
// const categoryData = [
//     { name: "موبایل", value: 35 },
//     { name: "لپ تاپ", value: 25 },
//     { name: "لوازم جانبی", value: 20 },
//     { name: "تبلت", value: 15 },
//     { name: "ساعت هوشمند", value: 5 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// داده‌های فروش هفتگی
const weeklyData = [
    { name: "شنبه", فروش: 4000000 },
    { name: "یکشنبه", فروش: 3500000 },
    { name: "دوشنبه", فروش: 5000000 },
    { name: "سه‌شنبه", فروش: 4800000 },
    { name: "چهارشنبه", فروش: 5500000 },
    { name: "پنج‌شنبه", فروش: 7000000 },
    { name: "جمعه", فروش: 3000000 },
];

const recentOrders = [
    { id: 1, customer: "علی محمدی", product: "گوشی سامسونگ A54", date: "1402/08/12", status: "تحویل داده شده", amount: "12,499,000" },
    { id: 2, customer: "مریم احمدی", product: "لپ تاپ ایسوس", date: "1402/08/12", status: "در حال ارسال", amount: "48,900,000" },
    { id: 3, customer: "رضا کریمی", product: "هدفون بلوتوثی", date: "1402/08/11", status: "در انتظار تایید", amount: "2,850,000" },
];

const Dashboard = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex-1 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div 
                            key={stat.id} 
                            className={`p-6 rounded-xl transition-colors duration-300 ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {stat.title}
                                    </p>
                                    <p className={`text-2xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {stat.value}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                    <Icon className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={24} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className={`text-sm ${
                                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                    {stat.change}
                                </span>
                                <span className={`text-sm mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    نسبت به ماه قبل
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Sales Chart */}
                <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        نمودار فروش ماهانه
                    </h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={salesData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                                <XAxis 
                                    dataKey="name" 
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                />
                                <YAxis 
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                    tickFormatter={(value) => `${value / 1000000}M`}
                                />
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1f2937' : 'white',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        color: isDarkMode ? 'white' : 'black'
                                    }}
                                    formatter={(value) => [`${(value / 1000000).toFixed(1)}M تومان`, 'فروش']}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="فروش" 
                                    stroke="#7c3aed" 
                                    fill="#7c3aed" 
                                    fillOpacity={0.2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Weekly Sales Chart */}
                <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        فروش هفتگی
                    </h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={weeklyData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                                <XAxis 
                                    dataKey="name" 
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                />
                                <YAxis 
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                    tickFormatter={(value) => `${value / 1000000}M`}
                                />
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1f2937' : 'white',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        color: isDarkMode ? 'white' : 'black'
                                    }}
                                    formatter={(value) => [`${(value / 1000000).toFixed(1)}M تومان`, 'فروش']}
                                />
                                <Bar 
                                    dataKey="فروش" 
                                    fill="#7c3aed" 
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Distribution */}
                {/* <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        توزیع دسته‌بندی محصولات
                    </h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1f2937' : 'white',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        color: isDarkMode ? 'white' : 'black'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div> */}
            </div>

            {/* Recent Orders */}
            <div className={`rounded-xl p-6 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
                <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    آخرین سفارشات
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <th className="pb-4 font-medium">مشتری</th>
                                <th className="pb-4 font-medium">محصول</th>
                                <th className="pb-4 font-medium">تاریخ</th>
                                <th className="pb-4 font-medium">مبلغ</th>
                                <th className="pb-4 font-medium">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    <td className="py-4">{order.customer}</td>
                                    <td className="py-4">{order.product}</td>
                                    <td className="py-4">{order.date}</td>
                                    <td className="py-4">{order.amount} تومان</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            order.status === 'تحویل شده' 
                                                ? 'bg-green-100 text-green-800' 
                                                : order.status === 'در حال ارسال'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;