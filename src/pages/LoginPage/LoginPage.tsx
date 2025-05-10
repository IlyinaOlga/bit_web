import { DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { FC, useContext } from "react";
import { FieldGroup, StyledDialog } from "./LoginPage.styled";
import { ContainedButton, Field, TextButton, FormCol } from "../../core/styles";
import { Controller, useForm } from "react-hook-form";
import { LoginFormValues, LoginProps } from "./LoginPage.types";
import { authSchema } from "../../core/scheme";
import { joiResolver } from "@hookform/resolvers/joi";
import { Store } from "../../core/store";
import { setNameValue } from "../../core/store/authorize";
import { setLocalStorage } from "../../core/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTES } from "../../core/constants";
import { enqueueSnackbar } from "notistack";

const LoginPage: FC<LoginProps> = ({ open, onClose }) => {
  const { dispatch } = useContext(Store);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: joiResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      return axios.post(API_ROUTES.LOGIN, data);
    },
    onSuccess: (res: any) => {
      const { name, status } = res.data;

      if (name) {
        dispatch(setNameValue(name));
        setLocalStorage("user", name);
        enqueueSnackbar("Вы авторизовались!", {
          variant: "reportComplete",
          className: "success",
          preventDuplicate: true,
        });
        onClose();
      }

      if (status === "inactive") {
        enqueueSnackbar("Вы не активировали аккаунт", {
          variant: "reportComplete",
          className: "success",
          preventDuplicate: true,
        });
      }
    },
    onError: () => {
      enqueueSnackbar("Неверный email или пароль", {
        variant: "reportComplete",
        className: "error",
        preventDuplicate: true,
      });
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
          <DialogTitle>Вход</DialogTitle>
          <DialogContent>
            <FieldGroup>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Ваша эл. почта"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Пароль"
                    type="password"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.password?.message}
                    helperText={errors?.password?.message}
                    onChange={onChange}
                  />
                )}
              />
            </FieldGroup>
          </DialogContent>
          <DialogActions>
            <TextButton onClick={onClose}>Отменить</TextButton>
            <ContainedButton
              type="submit"
              variant="contained"
              disabled={!isValid || isPending}
            >
              Войти
            </ContainedButton>
          </DialogActions>
        </FormCol>
      </form>
    </StyledDialog>
  );
};

export default LoginPage;
