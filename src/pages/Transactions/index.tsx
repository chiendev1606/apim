import React, { useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AgentsModal from './components/AgentsModal';
import { ChangePoint, ChangeUsername } from '@/pages/Transactions/components/ChangeUsernameAndPointForm';
import ChangePasswordForm from '@/pages/Transactions/components/ChangePasswordForm';
import TreeReferralForm from '@/pages/Transactions/components/TreeReferralForm';
import { showConfirm, showError, showSuccess } from '@/helpers/alert';

export enum TYPE_MODAL {
  NONE,
  CREATE_REF,
  CHANGE_PW,
  CHANGE_USERNAME,
  CHANGE_POINT,
}

const Transactions: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [typeModal, setTypeModal] = useState(TYPE_MODAL.NONE);
  const show = useMemo(() => typeModal !== TYPE_MODAL.NONE, [typeModal]);
  const onSubmit = async (value: any) => {
    console.log(errors);

    const confirm = await showConfirm();
    if (!confirm) {
      showError('error');
      return;
    }
    if (!(Object.keys(errors).length === 0)) {
      const errorMessages = Object.keys(errors).map((item) => {
        return errors[item]?.message;
      });
    }
  };

  const closeModal = () => setTypeModal(TYPE_MODAL.NONE);

  const getModalByType = () => {
    switch (typeModal) {
      case TYPE_MODAL.CHANGE_POINT:
        return <ChangePoint register={register} />;
      case TYPE_MODAL.CHANGE_PW:
        return <ChangePasswordForm register={register} />;
      case TYPE_MODAL.CHANGE_USERNAME:
        return <ChangeUsername register={register} />;
      case TYPE_MODAL.CREATE_REF:
        return <TreeReferralForm register={register} />;
      default:
        return '';
    }
  };

  return (
    <>
      <button onClick={() => setTypeModal(TYPE_MODAL.CHANGE_PW)}>pw</button>
      <button onClick={() => setTypeModal(TYPE_MODAL.CHANGE_POINT)}>point</button>
      <button onClick={() => setTypeModal(TYPE_MODAL.CREATE_REF)}>ref</button>
      <button onClick={() => setTypeModal(TYPE_MODAL.CHANGE_USERNAME)}>change username</button>
      {show && (
        <AgentsModal title={'modal title'} show={show} closeModal={closeModal}>
          <Form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
            {getModalByType()}
          </Form>
        </AgentsModal>
      )}
    </>
  );
};

export default Transactions;
