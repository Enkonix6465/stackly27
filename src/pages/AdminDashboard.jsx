import React, { useEffect, useState } from "react";
import {
  FaUsers, FaUserPlus, FaChartBar, FaSignOutAlt, FaPlus, FaTrash, FaTable,
  FaRegCalendarAlt, FaClipboardList, FaDoorOpen, FaUserCircle, FaCalendarAlt, FaCheckCircle
} from "react-icons/fa";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend
} from "recharts";
import { useNavigate } from "react-router-dom";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];


const getToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const dateString = (d) => (d ? d.toISOString().slice(0, 10) : "");
const daysBetween = (dt) => Math.round((getToday() - dt) / (24 * 3600 * 1000));

// Save audit log to localStorage
function saveAudit(message, performer = "System") {
  const logs = JSON.parse(localStorage.getItem("auditlog") || "[]");
  logs.unshift({
    ts: new Date().toLocaleString(),
    msg: message,
    by: performer
  });
  localStorage.setItem("auditlog", JSON.stringify(logs));
}

// Registration analytics helpers
function getRegistrationCounts(users, { range = "all", days = 0 } = {}) {
  const today = getToday();
  let within = (dt) => true;
  if (range === 'today') within = (dt) => dt.getTime() === today.getTime();
  else if (range === 'week') within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
  else if (range === 'month') within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), 1);
  else if (range === 'custom' && days > 0)
    within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - days + 1);
  return users.filter(u => !!u.signupDate && within(new Date(u.signupDate + "T00:00:00"))).length;
}
function getRegistrationsByDay(users, days = 30) {
  let result = {};
  users.forEach(u => {
    if (u.signupDate) result[u.signupDate] = (result[u.signupDate] || 0) + 1;
  });
  const ret = [];
  for (let i = days - 1; i >= 0; i--) {
    let d = new Date(); d.setDate(d.getDate() - i);
    const id = dateString(d);
    ret.push({ date: id, count: result[id] || 0 });
  }
  return ret;
}


const AdminDashboard = () => {
  // Sidebar & state
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [currentUser] = useState({
    name: "Admin",
    email: "admin@itservice.in",
    loginTime: new Date().toLocaleTimeString(),
    loginDate: new Date().toLocaleDateString(),
  });
  const [showUserForm, setShowUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [interval, setIntervalRange] = useState("month");
  const [customDays, setCustomDays] = useState(14);
  const [tickets, setTickets] = useState(() => JSON.parse(localStorage.getItem("tickets") || "[]"));
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [newTicket, setNewTicket] = useState({ title: "", detail: "", assignedTo: "", dueDate: "" });
  const [audit, setAudit] = useState(() => JSON.parse(localStorage.getItem("auditlog") || "[]"));
  const [expandAudit, setExpandAudit] = useState([]);
  const [regCounts, setRegCounts] = useState({ day: 0, week: 0, month: 0, all: 0, custom: 0 });
  const navigate = useNavigate();


  // Load users and tickets every show/operation
  useEffect(() => { setUsers(JSON.parse(localStorage.getItem("users") || "[]")); }, [showUserForm]);
  useEffect(() => { setTickets(JSON.parse(localStorage.getItem("tickets") || "[]")); }, [showTicketForm]);
  useEffect(() => { setAudit(JSON.parse(localStorage.getItem("auditlog") || "[]")); }, [activeMenu, showUserForm, showTicketForm]);

  // Update registration counts whenever users or customDays change
  useEffect(() => {
    setRegCounts({
      day: getRegistrationCounts(users, { range: "today" }),
      week: getRegistrationCounts(users, { range: "week" }),
      month: getRegistrationCounts(users, { range: "month" }),
      all: users.length,
      custom: getRegistrationCounts(users, { range: "custom", days: customDays }),
    });
  }, [users, customDays]);

  const regByDay = getRegistrationsByDay(users, interval === 'custom' ? customDays : interval === 'week' ? 7 : interval === 'month' ? 30 : 365);


  // Pie data – only "Today" and "All" for clear display
  const pieData = [
    { name: "Today", value: regCounts.day },
    { name: "All", value: regCounts.all - regCounts.day }
  ];


  // User CRUD
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.firstName || !newUser.email || !newUser.password) {
      setError("All required fields must be filled.");
      return;
    }
    if (users.find(u => u.email === newUser.email)) {
      setError("Email already in use.");
      return;
    }
    const now = new Date();
    const signupDate = dateString(now);
    const userObj = {
      ...newUser, signupDate, signupTime: now.toLocaleTimeString()
    };
    const updated = [...users, userObj];
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    setShowUserForm(false);
    setNewUser({ firstName: "", lastName: "", email: "", password: "" });
    setError("");
    saveAudit(`Registered user ${userObj.firstName} (${userObj.email})`, currentUser.name);
  };


  // Delete user
  const handleDeleteUser = (email) => {
    const updated = users.filter(u => u.email !== email);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    saveAudit(`Deleted user with email ${email}`, currentUser.name);
  };


  // Ticket CRUD
  const handleAddTicket = (e) => {
    e.preventDefault();
    if (!newTicket.title || !newTicket.detail || !newTicket.assignedTo || !newTicket.dueDate) return;
    const record = { ...newTicket, id: Math.random().toString(36).slice(2), submitter: currentUser.email, created: new Date().toLocaleString(), status: "Open" };
    const up = [record, ...tickets];
    setTickets(up);
    localStorage.setItem("tickets", JSON.stringify(up));
    setShowTicketForm(false); setNewTicket({ title: "", detail: "", assignedTo: "", dueDate: "" });
    saveAudit(`New ticket opened: ${record.title}.`, currentUser.name);
  };
  const handleTicketAction = (tid, action) => {
    let up = tickets.map(t => t.id === tid ? { ...t, status: action === "resolve" ? "Closed" : "Open" } : t);
    if (action === "delete") up = tickets.filter(t => t.id !== tid);
    setTickets(up);
    localStorage.setItem("tickets", JSON.stringify(up));
    saveAudit(`${action === "delete" ? "Deleted" : action === "resolve" ? "Resolved" : "Updated"} ticket ${tid}`, currentUser.name);
  };


  // Sessions (demo): Only admin is online
  const sessions = [currentUser];


  const menu = [
    { key: "dashboard", name: "Dashboard", icon: <FaChartBar size={20} /> },
    { key: "users", name: "Users", icon: <FaUsers size={20} /> },
    { key: "registrations", name: "Registrations", icon: <FaUserPlus size={20} /> },
    { key: "tickets", name: "Tickets", icon: <FaClipboardList size={20} /> },
    { key: "sessions", name: "Active Sessions", icon: <FaDoorOpen size={20} /> },
    { key: "audit", name: "Audit Log", icon: <FaTable size={20} /> },
    { key: "logout", name: "Logout", icon: <FaSignOutAlt size={20} /> },
  ];


  // Helper for audit log expansion
  const toggleAuditExpand = (i) => setExpandAudit(expandAudit.includes(i) ? expandAudit.filter(idx => idx !== i) : [...expandAudit, i]);


  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-blue-900 to-indigo-900 font-inter">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-800 to-indigo-900 shadow-xl flex flex-col py-8 px-5 sticky top-0 z-40">
        <div className="text-3xl font-extrabold text-white mb-10 text-center tracking-wide">
          IT Services
        </div>
        <nav>
          <ul className="space-y-2">
            {menu.map((item) => (
              <li key={item.key}>
                <button
                  className={`flex w-full items-center p-3 rounded-lg font-semibold text-left ${activeMenu === item.key
                    ? "bg-blue-700 text-white shadow"
                    : "text-gray-200 hover:bg-blue-700 hover:text-white"
                    }`}
                  onClick={() => {
                    if (item.key === "logout") {
                      localStorage.removeItem('firstname');
                      localStorage.removeItem('lastname');
                      localStorage.removeItem('email');
                      navigate("/login");
                      return;
                    }
                    setActiveMenu(item.key);
                  }}
                >
                  <span className="mr-3">{item.icon}</span> {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>


      {/* Main Area */}
      <main className="flex-1 p-7 bg-blue-50 min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-5 mb-5">
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-1">Admin Dashboard</h1>
            <p className="text-gray-600">IT Services Operations Panel</p>
          </div>
          <div className="flex gap-3 items-center">
            {activeMenu === "users" && (
              <button className="bg-indigo-600 text-white px-3 py-2 rounded shadow-lg flex items-center gap-2"
                onClick={() => setShowUserForm(true)}>
                <FaPlus /> New User
              </button>
            )}
            {activeMenu === "tickets" && (
              <button className="bg-green-600 text-white px-3 py-2 rounded shadow-lg flex items-center gap-2"
                onClick={() => setShowTicketForm(true)}>
                <FaPlus /> New Ticket
              </button>
            )}
          </div>
        </header>


        {/* Dashboard Overview */}
        {activeMenu === "dashboard" && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard title="Total Users" value={users.length} icon={<FaUsers size={28} />} color="bg-blue-600" />
              <StatCard title="Registered Today" value={regCounts.day} icon={<FaUserPlus size={28} />} color="bg-green-600" />
              <StatCard title="This Month" value={regCounts.month} icon={<FaRegCalendarAlt size={28} />} color="bg-yellow-500" />
              <StatCard title="Open Tickets" value={tickets.filter(t => t.status === "Open").length} icon={<FaClipboardList size={28} />} color="bg-indigo-600" />
            </div>
            <div className="mb-4 flex gap-3 items-center">
              <span className="font-semibold mr-1">Chart Interval:</span>
              <button onClick={() => setIntervalRange("week")} className={`px-2 rounded ${interval === "week" ? "bg-blue-700 text-white" : "bg-white"}`}>Week</button>
              <button onClick={() => setIntervalRange("month")} className={`px-2 rounded ${interval === "month" ? "bg-blue-700 text-white" : "bg-white"}`}>Month</button>
              <button onClick={() => setIntervalRange("year")} className={`px-2 rounded ${interval === "year" ? "bg-blue-700 text-white" : "bg-white"}`}>Year</button>
              <button onClick={() => setIntervalRange("custom")} className={`px-2 rounded ${interval === "custom" ? "bg-blue-700 text-white" : "bg-white"}`}>Custom</button>
              {interval === "custom" && <input type="number" min="2" max="365" value={customDays} onChange={e => setCustomDays(e.target.value)} className="w-20 ml-2 p-1 rounded" />}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-3 text-gray-800">User Registrations by Day</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={regByDay}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#c7d4ef" />
                    <XAxis dataKey="date" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Registration Stats</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}
                      fill="#8884d8"
                      label={({ name, value, percent }) =>
                        `${name}: ${value} (${(percent * 100).toFixed(1)}%)`
                      }
                      labelLine={false}
                    >
                      {pieData.map((entry, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}


        {/* Users Table */}
        {activeMenu === "users" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-xl">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left">First Name</th>
                    <th className="px-4 py-3 text-left">Last Name</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Signup Date</th>
                    <th className="px-4 py-3 text-left">Signup Time</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, idx) => (
                    <tr key={u.email} className="border-t hover:bg-blue-50">
                      <td className="px-4 py-2">{u.firstName}</td>
                      <td className="px-4 py-2">{u.lastName}</td>
                      <td className="px-4 py-2">{u.email}</td>
                      <td className="px-4 py-2">{u.signupDate || "—"}</td>
                      <td className="px-4 py-2">{u.signupTime || "—"}</td>
                      <td className="px-4 py-2">
                        <button className="ml-2 text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteUser(u.email)} title="Delete User">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr><td colSpan={6} className="p-4 text-center text-gray-400">No users found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}


        {/* Registrations Analytics */}
        {activeMenu === "registrations" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">Registration Analytics</h2>
            <div className="flex flex-wrap gap-6 mb-7">
              <StatBlock label="Today" value={regCounts.day} color="text-blue-500" />
              <StatBlock label="Last 7 Days" value={regCounts.week} color="text-green-600" />
              <StatBlock label="This Month" value={regCounts.month} color="text-indigo-600" />
              <StatBlock label="All-Time" value={regCounts.all} color="text-gray-800" />
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <h3 className="mb-3 font-semibold text-blue-700">Registrations by Day (last {interval === 'custom' ? customDays : interval === "week" ? 7 : interval === "month" ? 30 : 365}d)</h3>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={regByDay}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="date" stroke="#3b82f6" />
                  <YAxis stroke="#3b82f6" />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}


        {/* Tickets */}
        {activeMenu === "tickets" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">Support Tickets</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow-md text-sm">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left">ID</th>
                    <th className="px-3 py-2 text-left">Title</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-left">Assigned To</th>
                    <th className="px-3 py-2 text-left">Due Date</th>
                    <th className="px-3 py-2 text-left">Submitted By</th>
                    <th className="px-3 py-2 text-left">Created</th>
                    <th className="px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr key={t.id} className={`${t.status === "Open" ? "bg-green-50" : "bg-gray-50"} border-t`}>
                      <td className="px-3 py-2">{t.id}</td>
                      <td className="px-3 py-2">{t.title}</td>
                      <td className="px-3 py-2">
                        <span className={`badge ${t.status === "Open" ? "bg-green-400 text-white" : "bg-gray-400 text-white"}`}>
                          {t.status}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span className="flex items-center space-x-2">
                          <FaUserCircle className="text-blue-400 mr-1" /> {t.assignedTo || "-"}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-pink-400 mr-1" /> {t.dueDate || "-"}
                        </span>
                      </td>
                      <td className="px-3 py-2">{t.submitter}</td>
                      <td className="px-3 py-2">{t.created}</td>
                      <td className="px-3 py-2 flex gap-1">
                        {t.status === "Open" && <button className="bg-blue-500 text-white px-2 py-1 rounded mr-1" onClick={() => handleTicketAction(t.id, "resolve")}>Resolve</button>}
                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleTicketAction(t.id, "delete")}>Delete</button>
                      </td>
                    </tr>
                  ))}
                  {tickets.length === 0 && <tr><td colSpan={8} className="text-center text-gray-400 py-4">No tickets found.</td></tr>}
                </tbody>
              </table>
            </div>
          </section>
        )}


        {/* Active Sessions */}
        {activeMenu === "sessions" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">Active Sessions</h2>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-200 rounded-2xl shadow-lg p-6 max-w-lg border-l-4 border-blue-500">
              <table className="w-full text-left">
                <thead><tr><th></th><th>User</th><th>Email</th><th>Login Time</th><th>Date</th></tr></thead>
                <tbody>
                  {sessions.map((s, i) =>
                    <tr key={s.email}>
                      <td className="py-2">
                        <FaCheckCircle className="text-green-500 mr-2" title="Online" />
                      </td>
                      <td className="py-2 flex items-center">
                        <FaUserCircle className="text-gray-500 mr-1 text-xl" /> {s.name}
                      </td>
                      <td className="py-2">{s.email}</td>
                      <td className="py-2">{s.loginTime}</td>
                      <td className="py-2">{s.loginDate}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}


        {/* Audit Log */}
        {activeMenu === "audit" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">Audit Log</h2>
            <div className="bg-white shadow-md rounded-lg p-5 max-w-2xl w-full">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>Date Time</th>
                    <th>Action</th>
                    <th>By</th>
                    <th>+</th>
                  </tr>
                </thead>
                <tbody>
                  {audit.map((a, i) =>
                    <React.Fragment key={i}>
                      <tr>
                        <td className="p-2">{a.ts}</td>
                        <td className="p-2">
                          <span className={`badge ${/deleted|delete/i.test(a.msg) ? "bg-red-200" : /register|new/i.test(a.msg) ? "bg-green-200" : "bg-blue-200"} text-gray-900`}>
                            {a.msg.length > 32 ? a.msg.slice(0, 32) + "..." : a.msg}
                          </span>
                        </td>
                        <td className="p-2">{a.by}</td>
                        <td className="p-2">
                          <button className="text-blue-600 font-bold" onClick={() => toggleAuditExpand(i)}>
                            {expandAudit.includes(i) ? "-" : "+"}
                          </button>
                        </td>
                      </tr>
                      {expandAudit.includes(i) && (
                        <tr>
                          <td colSpan={4} className="p-2 bg-blue-50 text-sm">
                            <span className="font-semibold">Details:</span> {a.msg}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )}
                  {audit.length === 0 &&
                    <tr>
                      <td colSpan={4} className="text-center text-gray-400 py-4">No recent actions.</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>


      {/* Add User Modal */}
      {showUserForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-3 relative">
            <h2 className="text-2xl font-bold mb-5">Register New User</h2>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <form onSubmit={handleAddUser} className="space-y-3">
              <input type="text" className="w-full border p-2 rounded" placeholder="First Name" value={newUser.firstName} onChange={e => setNewUser({ ...newUser, firstName: e.target.value })} />
              <input type="text" className="w-full border p-2 rounded" placeholder="Last Name" value={newUser.lastName} onChange={e => setNewUser({ ...newUser, lastName: e.target.value })} />
              <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
              <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
              <div className="flex gap-3 justify-end mt-4">
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">Register</button>
                <button type="button" className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold" onClick={() => { setShowUserForm(false); setError(""); }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Add Ticket Modal */}
      {showTicketForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-3 relative">
            <h2 className="text-2xl font-bold mb-5">Create Support Ticket</h2>
            <form onSubmit={handleAddTicket} className="space-y-3">
              <input type="text" className="w-full border p-2 rounded" placeholder="Title" value={newTicket.title} onChange={e => setNewTicket({ ...newTicket, title: e.target.value })} />
              <textarea className="w-full border p-2 rounded" placeholder="Detail" value={newTicket.detail} onChange={e => setNewTicket({ ...newTicket, detail: e.target.value })} />
              <input type="text" className="w-full border p-2 rounded" placeholder="Assigned To (Name)" value={newTicket.assignedTo} onChange={e => setNewTicket({ ...newTicket, assignedTo: e.target.value })} />
              <input type="date" className="w-full border p-2 rounded" placeholder="Due Date" value={newTicket.dueDate} onChange={e => setNewTicket({ ...newTicket, dueDate: e.target.value })} />
              <div className="flex gap-3 justify-end mt-4">
                <button type="submit" className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold">Submit</button>
                <button type="button" className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold" onClick={() => { setShowTicketForm(false); }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


const StatCard = ({ title, value, icon, color }) => (
  <div className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg text-white ${color} transform hover:scale-105 transition-transform duration-300 ease-in-out`}>
    <div className="mb-3">{icon}</div>
    <h3 className="text-lg font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);


const StatBlock = ({ label, value, color }) => (
  <div className={`bg-white shadow p-6 rounded-lg flex-1 min-w-[220px]`}>
    <h3 className={`font-bold text-lg mb-2 ${color}`}>{label}</h3>
    <p className="text-2xl font-mono">{value}</p>
  </div>
);


export default AdminDashboard;
