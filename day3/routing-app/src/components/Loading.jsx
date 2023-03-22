import { useRive } from '@rive-app/react-canvas';

function Loading() {
  const { RiveComponent } = useRive({
    src: '/loading.riv',
    autoplay: true,
  });

  return (
    <div className='animation'>
      <RiveComponent />
    </div>
  );
}

export default Loading;
