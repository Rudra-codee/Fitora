import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiFile, FiTrash2, FiDownload, FiEye } from 'react-icons/fi';

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #0f172a;
  font-weight: 600;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
  }
`;

const RecordsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 24px;
`;

const RecordCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const RecordTitle = styled.h3`
  font-size: 16px;
  color: #0f172a;
  margin-bottom: 8px;
  font-weight: 500;
`;

const RecordDate = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 16px;
`;

const RecordActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    color: #0f172a;
  }

  &.delete {
    color: #ef4444;
    &:hover {
      background: #fef2f2;
      border-color: #fee2e2;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #0f172a;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &.cancel {
    background: white;
    border: 1px solid #e2e8f0;
    color: #64748b;

    &:hover {
      background: #f8fafc;
      color: #0f172a;
    }
  }

  &.submit {
    background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
    border: none;
    color: white;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
    }
  }
`;

const HealthRecords = () => {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRecord, setNewRecord] = useState({
    title: '',
    date: '',
    description: '',
    file: null
  });

  const handleAddRecord = (e) => {
    e.preventDefault();
    const record = {
      id: Date.now(),
      ...newRecord,
      createdAt: new Date().toISOString()
    };
    setRecords([...records, record]);
    setNewRecord({ title: '', date: '', description: '', file: null });
    setIsModalOpen(false);
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container>
      <Header>
        <Title>Health Records</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <FiPlus size={18} />
          Add New Record
        </AddButton>
      </Header>

      <RecordsGrid>
        {records.map(record => (
          <RecordCard key={record.id}>
            <RecordTitle>{record.title}</RecordTitle>
            <RecordDate>{formatDate(record.date)}</RecordDate>
            <p>{record.description}</p>
            <RecordActions>
              {record.file && (
                <>
                  <ActionButton>
                    <FiEye size={16} />
                    View
                  </ActionButton>
                  <ActionButton>
                    <FiDownload size={16} />
                    Download
                  </ActionButton>
                </>
              )}
              <ActionButton 
                className="delete"
                onClick={() => handleDeleteRecord(record.id)}
              >
                <FiTrash2 size={16} />
                Delete
              </ActionButton>
            </RecordActions>
          </RecordCard>
        ))}
      </RecordsGrid>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <Form onSubmit={handleAddRecord}>
              <FormGroup>
                <Label>Record Title</Label>
                <Input
                  type="text"
                  value={newRecord.title}
                  onChange={(e) => setNewRecord({...newRecord, title: e.target.value})}
                  placeholder="e.g., Annual Check-up Results"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Date</Label>
                <Input
                  type="date"
                  value={newRecord.date}
                  onChange={(e) => setNewRecord({...newRecord, date: e.target.value})}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  value={newRecord.description}
                  onChange={(e) => setNewRecord({...newRecord, description: e.target.value})}
                  placeholder="Add notes or description about the record"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Attach File (optional)</Label>
                <Input
                  type="file"
                  onChange={(e) => setNewRecord({...newRecord, file: e.target.files[0]})}
                />
              </FormGroup>
              <ButtonGroup>
                <Button 
                  type="button" 
                  className="cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="submit">
                  Save Record
                </Button>
              </ButtonGroup>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default HealthRecords; 