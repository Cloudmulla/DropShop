"use client"

import { useState } from "react"
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  BarChart3, 
  Settings,
  Plus,
  Search
} from "lucide-react"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      change: "+12%",
      icon: Package,
      color: "bg-blue-500"
    },
    {
      title: "Total Orders", 
      value: "5,678",
      change: "+18%",
      icon: ShoppingCart,
      color: "bg-green-500"
    },
    {
      title: "Total Customers",
      value: "2,456", 
      change: "+7%",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Total Revenue",
      value: "$89,432",
      change: "+23%", 
      icon: DollarSign,
      color: "bg-yellow-500"
    }
  ]

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">DropShop Admin</h1>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              {activeTab}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 overflow-y-auto h-full">
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center">
                        <div className={`${stat.color} rounded-lg p-3`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <div className="flex items-center">
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <span className="ml-2 text-sm font-medium text-green-600">
                              {stat.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((order) => (
                      <div key={order} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">#ORD-{order.toString().padStart(6, '0')}</p>
                          <p className="text-sm text-gray-600">Customer Name {order}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${(Math.random() * 500 + 50).toFixed(2)}</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Products Management</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Product management interface will be here.</p>
                <div className="mt-4 space-y-4">
                  <div className="text-sm text-gray-500">
                    Features to implement:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Add/Edit/Delete products</li>
                      <li>Manage product categories</li>
                      <li>Upload product images</li>
                      <li>Set pricing and inventory</li>
                      <li>SEO optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Orders Management</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Order management interface will be here.</p>
                <div className="mt-4 space-y-4">
                  <div className="text-sm text-gray-500">
                    Features to implement:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>View all orders</li>
                      <li>Update order status</li>
                      <li>Process refunds</li>
                      <li>Generate invoices</li>
                      <li>Shipping management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Customer Management</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Customer management interface will be here.</p>
                <div className="mt-4 space-y-4">
                  <div className="text-sm text-gray-500">
                    Features to implement:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>View customer profiles</li>
                      <li>Order history</li>
                      <li>Customer support</li>
                      <li>Loyalty programs</li>
                      <li>Marketing segments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Settings</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Store settings and configuration will be here.</p>
                <div className="mt-4 space-y-4">
                  <div className="text-sm text-gray-500">
                    Settings to configure:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Store information</li>
                      <li>Payment settings</li>
                      <li>Shipping options</li>
                      <li>Tax configuration</li>
                      <li>Email templates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
