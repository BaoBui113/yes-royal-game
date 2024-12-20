import ModalMobileService from './ModalMobileService';
import ModalPcGuard from './ModalPcGuard';
import ModalRemoteSupport from './ModalRemoteSupport';
import ModalSecretAccrount from './ModalSecretAccount';

export default function OtherMenu() {
  return (
    <>
      <ModalSecretAccrount />
      <ModalRemoteSupport />
      <ModalPcGuard />
      <ModalMobileService />
    </>
  );
}
