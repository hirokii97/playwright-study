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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
  };
  return (
    <>
      <Header />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        {isSubmit ? <Confirm formData={formData} handleBack={() => setIsSubmit(false)} /> : <Form formData={formData} setformData={setformData} handleSubmit={handleSubmit} />}
      </div>
    </>
  );
}
