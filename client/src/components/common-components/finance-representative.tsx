export default function FinanceRepresentative() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
      <h2 className="text-xl font-bold text-center mb-6">
        Finance Representative
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cash Price
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deposit
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount of Credit
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount Payable
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                Conditional Sale
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                £16,450.00
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                £1,645.00
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                £14,805.00
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                £21,495.20
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        <div>
          <p className="text-xs text-gray-500">Administration Fee</p>
          <p className="font-medium">£0.00</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Option to Purchase Fee</p>
          <p className="font-medium">£10.00</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Fixed Rate of Interest</p>
          <p className="font-medium">6.9%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Duration of Agreement</p>
          <p className="font-medium">60 Months</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Initial Payment</p>
          <p className="font-medium">£330.87</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div>
          <p className="text-xs text-gray-500">Monthly Payment</p>
          <p className="font-medium">£330.87 x 59</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Final Payment</p>
          <p className="font-medium">£340.87</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">APR Representative</p>
          <p className="font-medium">12.9%</p>
        </div>
      </div>
    </div>
  );
}
