
const OrderPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-50  ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-6 px-1">12234545454545</td>
            <td className="py-6 px-1">12.03.3030</td>
            <td className="py-6 px-1">$56</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu(2) , Veggie Pizza (2) , coca Cola 1l(1)
            </td>
            <td className="py-6 px-1">On the Way (approx. 10 mins)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage