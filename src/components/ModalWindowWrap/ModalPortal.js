import { createPortal } from 'react-dom';

export const ModalPortal = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    console.error(
      "Portal root element not found. Please create a div with id='portal-root' in your HTML.",
    );
    return null;
  }

  return createPortal(children, portalRoot);
};