export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">AbhiRecruit</h1>
        <p className="text-xl text-gray-600 mb-8">AI-Powered Recruitment Platform</p>
        <a href="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </a>
      </div>
    </div>
  );
}