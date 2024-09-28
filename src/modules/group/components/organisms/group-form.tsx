import { Box, TextField } from "@mui/material";

import { Dialog } from "@/modules/core/components/molecules";
import { useGroupContext } from "@/modules/group/context/group-context";
import { Group } from "@/modules/group/models";
import { useState } from "react";

interface GroupFormProps {
  open: boolean;
  onClose: () => void;
}
export const GroupForm = ({ open, onClose }: GroupFormProps): JSX.Element => {
  const { createGroup, loading } = useGroupContext();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleConfirm = async () => {
    if (!name) {
      alert("Nome do grupo é obrigatório");
      return;
    }

    const data: Group = {
      name,
      description,
    };

    await createGroup(data);
    alert("Grupo criado com sucesso");
    handleCancel();
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog
      title="Criar um grupo"
      open={open}
      onClose={handleCancel}
      cancelLabel="Cancelar"
      onCancel={handleCancel}
      confirmLabel="Criar grupo"
      onConfirm={handleConfirm}
      loading={loading}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="groupName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nome do grupo"
          variant="outlined"
          placeholder="Nome do grupo"
          fullWidth
          sx={{ maxWidth: 600 }}
        />

        <TextField
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Descrição"
          variant="outlined"
          placeholder="Você pode adicionar uma breve descrição do grupo, se desejar"
          fullWidth
          multiline
          rows={4}
        />
      </Box>
    </Dialog>
  );
};
