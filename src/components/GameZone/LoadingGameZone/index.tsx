'use client';

export default function LoadingGame({
  isModalLoadingGame,
  setIsModalLoadingGame,
}: {
  isModalLoadingGame: boolean;
  setIsModalLoadingGame: (value: boolean) => void;
}) {
  const onClose = () => setIsModalLoadingGame(false);
  return (
    <div
      className={`z-50 transition-all ease-out duration-700 ${
        isModalLoadingGame
          ? 'opacity-100 fixed inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50'
          : 'invisible opacity-0'
      }`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {isModalLoadingGame && (
          <div id="load">
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
          </div>
        )}
      </div>
    </div>
  );
}
