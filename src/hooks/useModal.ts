import { useState } from 'react';

export const useModal = (isOpen = false) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};
