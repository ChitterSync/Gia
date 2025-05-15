export default function ComicsBooksPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Comics & Books</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Dive into a world of comics and books from various genres.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example content cards */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Comic Title 1</h3>
            <p className="text-gray-400">A brief description of the comic or book.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Book Title 2</h3>
            <p className="text-gray-400">A brief description of the comic or book.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Comic Title 3</h3>
            <p className="text-gray-400">A brief description of the comic or book.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
