import {
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ChangeEvent, FC } from "react";
import {
  ContainedButton,
  Field,
  TextButton,
  FormCol,
  StyledLabel,
  StyledRadioGroup,
} from "../../core/styles";
import { Controller, useForm } from "react-hook-form";
import { confRegScheme } from "../../core/scheme";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  ConferenceRegistrationFormValues,
  ConferenceRegistrationProps,
} from "./ConfarenceRegistrationPage.types";
import { FieldGroup, StyledDialog } from "../LoginPage/LoginPage.styled";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTES } from "../../core/constants";
import {
  InputUpload,
  InputUploadContainer,
} from "./ConferenceRegistrationPage.styled";
import { ReactComponent as DownloadIcon } from "../../icons/download.svg";

const ConferenceRegistrationPage: FC<ConferenceRegistrationProps> = ({
  open,
  onClose,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ConferenceRegistrationFormValues>({
    mode: "onChange",
    resolver: joiResolver(confRegScheme),
    defaultValues: {
      author_names: "",
      send_name: "",
      phone: "",
      email: "",
      title: "",
      type: "",
      annotation: "",
      file: undefined,
    },
  });

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      onChange(e.target.files[0]);
    } else {
      onChange(null);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => {
      console.log(formData, "req");

      return axios.post(API_ROUTES.ARTICLE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      enqueueSnackbar("Статья успешно загружена", {
        variant: "reportComplete",
        className: "success",
        preventDuplicate: true,
      });
      onClose();
    },
    onError: () => {
      enqueueSnackbar("Произошла ошибка", {
        variant: "reportComplete",
        className: "error",
        preventDuplicate: true,
      });
      onClose();
    },
  });

  const onSubmit = (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "file" && data[key]) {
        formData.append("file", data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });

    mutate(formData);
    console.log(data);
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
                name="author_names"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="ФИО всех авторов"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.author_names?.message}
                    helperText={errors?.author_names?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="send_name"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="ФИО отправителя заявки"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.send_name?.message}
                    helperText={errors?.send_name?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="phone"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Телефон для связи"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.phone?.message}
                    helperText={errors?.phone?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Email для связи"
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
                name="title"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Название доклада"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.title?.message}
                    helperText={errors?.title?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="annotation"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Аннотация"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.annotation?.message}
                    helperText={errors?.annotation?.message}
                    onChange={onChange}
                  />
                )}
              />

              <FormControl component="fieldset">
                <StyledLabel>
                  <FormLabel component="legend">Форма участия</FormLabel>
                </StyledLabel>
                <Controller
                  control={control}
                  name="type"
                  render={({ field }) => (
                    <StyledRadioGroup {...field}>
                      <FormControlLabel
                        value="offline"
                        control={<Radio />}
                        label="Очно"
                      />
                      <FormControlLabel
                        value="online"
                        control={<Radio />}
                        label="Онлайн"
                      />
                    </StyledRadioGroup>
                  )}
                />
              </FormControl>

              <StyledLabel>
                <FormLabel component="legend">Статья</FormLabel>
              </StyledLabel>
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="file"
                      id="file-upload"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, field.onChange)}
                    />
                    <InputUploadContainer>
                      <InputUpload htmlFor="file-upload">
                        <DownloadIcon />
                        Загрузить&nbsp;файл
                      </InputUpload>
                      {field.value && <p>Выбран файл: {field.value.name}</p>}
                    </InputUploadContainer>
                  </div>
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
              Зарегистрироваться
            </ContainedButton>
          </DialogActions>
        </FormCol>
      </form>
    </StyledDialog>
  );
};

export default ConferenceRegistrationPage;
