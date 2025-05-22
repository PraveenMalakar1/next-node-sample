interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  return (
    <div className="flex justify-center my-8">
      <nav className="inline-flex -space-x-px">
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600"
        >
          1
        </a>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
        >
          2
        </a>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
        >
          3
        </a>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
        >
          4
        </a>
        <span className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
          ...
        </span>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
        >
          25
        </a>
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
        >
          Next
        </a>
      </nav>
    </div>
  );
}
