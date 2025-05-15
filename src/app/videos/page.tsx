export default function VideosPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Videos</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Explore a wide range of videos from creators around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Video Title 1</h3>
            <p className="text-gray-400">A brief description of the video.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Video Title 2</h3>
            <p className="text-gray-400">A brief description of the video.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Video Title 3</h3>
            <p className="text-gray-400">A brief description of the video.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
