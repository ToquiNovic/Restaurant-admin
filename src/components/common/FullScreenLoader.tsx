import ClockLoader from "react-spinners/ClockLoader";

interface FullScreenLoaderProps {
  size?: number;
  color?: string;
  message?: string;
}

export function FullScreenLoader({
  size = 80,
  color = "#36d7b7",
  message = "Cargando...",
}: FullScreenLoaderProps) {
  return (
    <div className="flex flex-direction flex-col items-center justify-center h-screen">
      <ClockLoader size={size} color={color} />
      <p className="text-center">{message}</p>
    </div>
  );
}
