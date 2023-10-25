import React from "react";
import {
  ModalBox,
  ModalContainer,
  BtnContainer,
  ModalMain,
  ModalHeader,
  SubmitBtn,
  Label,
  Input,
  Select,
  Errors,
} from "./modal-style";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import CountryCodes from "../../data/countryCode/codes.json";

import TeamData from "../../data/team.json"

const Modal = ({ setModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setModal(false);
  };
  const {countries} = CountryCodes;
  const {teams}  = TeamData;
  return (
    <ModalContainer
      onClick={(e) => {
        setModal(false);
      }}
    >
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <div>Book Demo Form</div>
          <RxCross2
            onClick={() => {
              setModal(false);
            }}
            className="cross"
          />
        </ModalHeader>
        <ModalMain onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: true })}
              autoComplete="true"
            />
            {errors.name && <Errors>This field is required</Errors>}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              autoComplete="true"
            />
            {errors.email && <Errors>Enter valid email address</Errors>}
          </div>
          <div>
            <Label htmlFor="country" autoComplete="true">
              Country
            </Label>
            <Select id="country" autoComplete="true" defaultValue={"+91"}>
              {countries.map((code, idx) => (
                <option value={code.code} key={idx}>
                  {code.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="number">Phone Number</Label>
            <Input
              id="number"
              type="number"
              {...register("number", { required: true })}
              autoComplete="true"
            />
            {errors.number && <Errors>This field is required</Errors>}
          </div>

          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              type="text"
              {...register("company", { required: true })}
              autoComplete="true"
            />
            {errors.company && <Errors>This field is required</Errors>}
          </div>

          <div>
            <Label htmlFor="Team">Team</Label>
            <Select {...register("Team")} id="Team" defaultValue={"other"}>
              <option value="other" disabled>
                Other
              </option>
             {
               teams.map((team) => (<option value={team.name} key={team.id}>{team.name}</option>))
             }
            </Select>
          </div>

          <BtnContainer>
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </BtnContainer>
        </ModalMain>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
