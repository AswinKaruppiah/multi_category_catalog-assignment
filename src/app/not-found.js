import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] w-full text-center gap-4">
      <span className="font-display text-[7rem] leading-none text-gray-300 select-none">
        404
      </span>
      <div className="flex flex-col gap-1 -mt-2">
        <h2 className="text-lg font-semibold text-gray-900">Page not found</h2>
        <p className="text-sm text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
      </div>
      <Link
        href="/"
        className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
      >
        Back to catalog
      </Link>
    </div>
  );
}
