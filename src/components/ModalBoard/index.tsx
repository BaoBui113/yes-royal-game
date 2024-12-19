import ModalEvent from './ModalEvent';
import ModalFAQ from './ModalFAQ';
import ModalNotice from './ModalNotice';

export default async function ModalBoard() {
  return (
    <>
      <ModalNotice />
      <ModalEvent />
      <ModalFAQ />
    </>
  );
}
