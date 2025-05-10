import { DialogTitle, DialogActions } from "@mui/material";
import { FC } from "react";
import { FieldGroup, StyledDialog } from "../LoginPage/LoginPage.styled";
import {
  ContainedButton,
  FilledField,
  FormCol,
  TextButton,
} from "../../core/styles";
import { Controller, useForm } from "react-hook-form";
import {
  RegistrationFormValues,
  RegistrationProps,
} from "./RegistrationPage.types";
import { registrationSchema } from "../../core/scheme";
import { joiResolver } from "@hookform/resolvers/joi";
import { StyledDialogContent } from "./RegistrationPage.styled";
import { useMutation } from "@tanstack/react-query";
import { API_ROUTES } from "../../core/constants";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const RegistrationPage: FC<RegistrationProps> = ({ open, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>({
    mode: "onChange",
    resolver: joiResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      return axios.post(API_ROUTES.REGISTRATION, data);
    },
    onSuccess: (res: any) => {
      const { message } = res.data;
      console.log(res, "success");

      enqueueSnackbar(message, {
        variant: "reportComplete",
        className: "success",
        preventDuplicate: true,
      });
      onClose();
    },
    onError: (res: any) => {
      console.log(res, "error");

      // enqueueSnackbar("Произошла ошибка!", {
      //   variant: "reportComplete",
      //   className: "error",
      //   preventDuplicate: true,
      // });
      onClose();
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormCol>
          <DialogTitle>Регистрация</DialogTitle>
          <StyledDialogContent>
            <FieldGroup>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, onBlur, onChange } }) => (
                  <FilledField
                    onBlur={onBlur}
                    variant="filled"
                    placeholder="Укажите ваше имя"
                    label="Укажите ваше имя"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.name?.message}
                    helperText={errors?.name?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { value, onBlur, onChange } }) => (
                  <FilledField
                    onBlur={onBlur}
                    variant="filled"
                    placeholder="Ваша эл. почта"
                    label="Ваша эл. почта"
                    type="email"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                    onChange={onChange}
                  />
                )}
              />
            </FieldGroup>
          </StyledDialogContent>
          <DialogActions>
            <TextButton onClick={onClose}>Отменить</TextButton>
            <ContainedButton
              type="submit"
              variant="contained"
              disabled={!isValid || isPending}
            >
              Зарегистрироваться
            </ContainedButton>
          </DialogActions>
        </FormCol>
      </form>
    </StyledDialog>
  );
};

export default RegistrationPage;
