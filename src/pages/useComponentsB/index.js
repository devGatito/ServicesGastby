import React, { useState } from "react";
import { Button, Flex, Modal, Text } from "@components";

const Modales = () => {
  const [showModal, setShowModal] = useState({ type: null });

  const handleOpenModal = (type) => {
    setShowModal({ type });
  };

  const handleCloseModal = () => {
    setShowModal({ type: null });
  };

  return (
    <>
    <Flex direction="column" gap="20px">
      {/* Buttons to trigger different modal types */}
      <Button theme="action" onClick={() => handleOpenModal("success")}>
        Open Success Modal
      </Button>
      <Button theme="action" onClick={() => handleOpenModal("error")}>
        Open Error Modal
      </Button>
      <Button theme="action" onClick={() => handleOpenModal("warning")}>
        Open Warning Modal
      </Button>
      <Button theme="action" onClick={() => handleOpenModal("info")}>
        Open Info Modal
      </Button>
      <Button theme="action" onClick={() => handleOpenModal("custom")}>
        Open Custom Modal
      </Button>
      </Flex>

      {/* Modal Definitions */}
      {showModal.type === "success" && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title="Success!"
          type="success"
          icon="check-circle"
          isCancel={true}
          width="500px"
        >
          <Flex>
            <Text>Operation completed successfully!</Text>
          </Flex>
        </Modal>
      )}

      {showModal.type === "error" && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title="Error!"
          type="error"
          icon="error"
          isCancel={true}
          width="500px"
        >
          <Flex>
            <Text>An error occurred. Please try again.</Text>
          </Flex>
        </Modal>
      )}

      {showModal.type === "warning" && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title="Warning!"
          type="warning"
          icon="exclamation-triangle"
          isCancel={true}
          width="500px"
        >
          <Flex>
            <Text>Be careful! Something might not work as expected.</Text>
          </Flex>
        </Modal>
      )}

      {showModal.type === "info" && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title="Information"
          type="info"
          icon="info-circle"
          isCancel={true}
          width="500px"
        >
          <Flex>
            <Text>This is an informational message.</Text>
          </Flex>
        </Modal>
      )}

      {showModal.type === "custom" && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title="Custom Modal"
          icon="star"
          width="600px"
        >
          <Flex direction="column" gap="20px">
            <Text>Welcome to the custom modal!</Text>
            <Button theme="action" onClick={handleCloseModal}>
              Close
            </Button>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default Modales;
