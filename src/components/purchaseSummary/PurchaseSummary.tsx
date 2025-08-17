import { useAppSelector } from "@/lib/hooks";
import { CartProduct } from "@/types/types";

const PurchaseSummary = ({ onContinue }: { onContinue: () => void }) => {
  const cart = useAppSelector((state) => state.cart);
  
  const handlePurchase = () => {
    alert(`Compra exitosa... Total de su compra: US$${cart.total.toFixed(2)}`);
    onContinue();
  };

  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-2 text-center text-xl font-bold">Resumen de compra</h2>
      <div className="mb-4">
        {cart.items.map((item: CartProduct, idx: number) => (
          <div key={idx} className="mb-2 flex justify-between">
            <div>
              <span className="text-gray-700">
                {item.name}
                {item.quantity && item.quantity > 1 ? (
                  <span className="ml-2 text-xs text-gray-500">x{item.quantity}</span>
                ) : null}
              </span>
              {item.description && (
                <div className="text-xs text-gray-500 mt-1">
                  {item.description.length > 10
                    ? item.description.slice(0, 20) + '...'
                    : item.description}
                </div>
              )}
            </div>
            <span className="text-right">
              <span className="text-xs text-gray-500">US$</span>
              <span className="text-xl font-bold">
                {(item.price * (item.quantity || 1)).toFixed(2)}
              </span>
            </span>
          </div>
        ))}
        <div className="mt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>
            <span className="text-xs text-gray-500">US$</span>
            <span className="text-xl font-bold">{cart.total.toFixed(2)}</span>
          </span>
        </div>
      </div>
      <button
        className="mt-4 w-full rounded bg-gray-800 py-2 text-white hover:bg-gray-900"
        onClick={handlePurchase}
      >
        Continuar compra
      </button>
    </div>
  );
};

export default PurchaseSummary;
