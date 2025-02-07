import React from 'react';
import { ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';

const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 173.50,
    change: 2.5,
    marketCap: '2.8T',
    pe: 28.5,
    volume: '55.2M'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.92,
    change: -0.8,
    marketCap: '2.7T',
    pe: 34.2,
    volume: '22.1M'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 141.80,
    change: 1.2,
    marketCap: '1.8T',
    pe: 25.1,
    volume: '18.5M'
  }
];

const StockList = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">P/E</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockStocks.map((stock) => (
              <tr key={stock.symbol} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${stock.price}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                  stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="flex items-center justify-end">
                    {stock.change >= 0 ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    {Math.abs(stock.change)}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{stock.marketCap}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{stock.pe}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{stock.volume}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <Star className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;