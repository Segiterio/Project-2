import React, { useState } from "react";
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
  CenterWait,
  LoadingBtn,
} from "./modal-style";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import CountryCodes from "../../data/countryCode/codes.json";

import TeamData from "../../data/team.json";
import axios from "axios";

const Modal = ({ setModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("empty");
  const onSubmit = async (data) => {
    setStatus("submitting");
    console.log("Form data", data);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/contact",
        data
      );
      console.log(res.data);
      setStatus("submitted");
    } catch (error) {
      console.log("This error is on cantact submission form", error);
    }
  };
  const { countries } = CountryCodes;
  const { teams } = TeamData;
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
        <div>
          <ModalHeader>
            <div>
              <h3>Book Demo Form</h3>
              <p>Contact us today , and get a reply in 24hrs</p>
            </div>
            <RxCross2
              onClick={() => {
                setModal(false);
              }}
              className="cross"
              size={25}
            />
          </ModalHeader>
          {status === "submitted" ? (
            <CenterWait>Thank You We Received Your Request</CenterWait>
          ) : (
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
                <Label htmlFor="countryCode" autoComplete="true">
                  Country
                </Label>
                <Select
                  id="countryCode"
                  {...register("countryCode")}
                  autoComplete="true"
                  defaultValue={"+91"}
                >
                  {countries.map((code, idx) => (
                    <option value={code.code} key={idx}>
                      {code.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="number"
                  {...register("phone", { required: true })}
                  autoComplete="true"
                />
                {errors.phone && <Errors>This field is required</Errors>}
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
                <Label htmlFor="team">Team</Label>
                <Select {...register("team")} id="team" defaultValue={"other"}>
                  <option value="other" disabled>
                    Other
                  </option>
                  {teams.map((team) => (
                    <option value={team.name} key={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </div>

              <BtnContainer>
                {status === "submitting" ? (
                  <LoadingBtn>Loading...</LoadingBtn>
                ) : (
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                )}
              </BtnContainer>
            </ModalMain>
          )}
        </div>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
