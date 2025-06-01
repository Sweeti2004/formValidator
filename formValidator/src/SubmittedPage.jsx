import { useLocation, useNavigate } from "react-router-dom";

const SubmittedPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Submitted Details</h2>
        <div className="space-y-2">
          {Object.entries(state).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))}
        </div>
        <button onClick={() => navigate("/")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Back</button>
      </div>
    </div>
  );
};

export default SubmittedPage;