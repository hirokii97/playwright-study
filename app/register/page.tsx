"use client";
import Header from "@/app/components/Header";
import React, { useState } from "react";
import Form from "./Form";
import Confirm from "./Confirm";

export type InputValue = { name: string; email: string; phoneNumber: number | "" };

export default function page() {
  const inputValueInit: InputValue = { name: "", email: "", phoneNumber: "" };
  const [formData, setformData] = useState<InputValue>(inputValueInit);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  return (
    <>
      <Header />
      {isSubmit ? <Confirm formData={formData} /> : <Form formData={formData} setformData={setformData} setIsSubmit={setIsSubmit} />}
    </>
  );
}
