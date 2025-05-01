import Friend from "@/components/Friend";

export default function FriendsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Friends</h1>
      <div className="space-y-6">
        {/* Sample friends list - you can replace this with real data */}
        <Friend />
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Alex</h2>
          <p className="text-gray-600">Last seen 2h ago</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Sophia</h2>
          <p className="text-gray-600">Online</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">John</h2>
          <p className="text-gray-600">Online</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Alex</h2>
          <p className="text-gray-600">Last seen 2h ago</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Sophia</h2>
          <p className="text-gray-600">Online</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">John</h2>
          <p className="text-gray-600">Online</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Alex</h2>
          <p className="text-gray-600">Last seen 2h ago</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">Sophia</h2>
          <p className="text-gray-600">Online</p>
        </div>
      </div>
    </div>
  );
}
