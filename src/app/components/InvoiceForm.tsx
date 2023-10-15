import React, { useContext, useEffect, useState } from "react";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import ItemList from "@/app/components/ItemList";
import ModalWrapper, { ModalProps } from "@/app/components/ModalWrapper";
import GoBack from "@/app/components/GoBack";
import PaymentTerms from "@/app/components/PaymentTerms";
import { calculateDueDate } from "@/app/utils/calculateDueDate";
import { useObjectState } from "@/app/hooks/useObjectState";
import { Context, IInvoice } from "@/app/context/Context";
import { generateRandomId } from "@/app/utils/generateRandomId";

interface IFormProps {
  address: string;
  city: string;
  postCode: string;
  country: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  projectDescription: string;
  paymentTerms: number;
  items: IInvoiceDetails[];
}
interface IInvoiceDetails {
  name: string;
  quantity: string | number;
  price: string | number;
  total: number;
}

interface IInvoiceForm extends ModalProps {
  formHeading: string;
  data?: IInvoice;
}

const emptyInvoiceDetails = {
  name: "",
  quantity: 1,
  price: "",
  total: 0,
};

function InvoiceForm({ isOpen, onClose, formHeading, data }: IInvoiceForm) {
  const { setState, allInvoices } = useContext(Context)!;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [paymentTermMissing, setPaymentTermMissing] = useState<boolean>(false);
<<<<<<< HEAD
=======

>>>>>>> cf401ec
  const emptyForm = {
    address: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    projectDescription: "",
    paymentTerms: 0,
<<<<<<< HEAD
    items: data !== undefined ? data.items : [emptyInvoiceDetails],
  };

=======
    items: data ? data.items : [emptyInvoiceDetails],
  };
>>>>>>> cf401ec
  const [formData, setFormData] = useObjectState<IFormProps>(emptyForm);

  useEffect(() => {
    if (data !== undefined) {
      setFormData({
        address: data.senderAddress.street,
        city: data.senderAddress.city,
        postCode: data.senderAddress.postCode,
        country: data.senderAddress.country,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientAddress: data.clientAddress.street,
        clientCity: data.clientAddress.city,
        clientPostCode: data.clientAddress.postCode,
        clientCountry: data.clientAddress.country,
        invoiceDate: data.createdAt,
        projectDescription: data.description,
        paymentTerms: data.paymentTerms,
        items: data.items,
      });
<<<<<<< HEAD
=======
      setInvoiceDetails(formData.items);
>>>>>>> cf401ec
    }
  }, [data]);

  const handleAddInvoiceDetails = () => {
    const updatedItems = [...formData.items, emptyInvoiceDetails];
    setFormData({ items: updatedItems });
  };

  const handleSelectPaymentTerm = (value: number) => {
    setFormData({ paymentTerms: value });
  };

  const handleSubmit = async (
    e: React.FormEvent,
    paymentStatus = "pending",
  ) => {
    e.preventDefault();
    if (formData.paymentTerms > 0) {
      const newInvoiceData: IInvoice = {
        id: data ? data.id : generateRandomId(allInvoices)!,
        createdAt: formData.invoiceDate,
        paymentDue: calculateDueDate(
          formData.invoiceDate,
          +formData.paymentTerms,
        ),
        description: formData.projectDescription,
        paymentTerms: formData.paymentTerms,
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        status: data ? data.status : paymentStatus,
        senderAddress: {
          street: formData.address,
          city: formData.city,
          postCode: formData.postCode,
          country: formData.country,
        },
        clientAddress: {
          street: formData.clientAddress,
          city: formData.clientCity,
          postCode: formData.clientPostCode,
          country: formData.clientCountry,
        },
        items: formData.items,
        total: formData.items.reduce((acc, total) => acc + total.total, 0),
      };
      let updatedInvoices = Array.isArray(allInvoices) ? allInvoices : [];

      if (data) {
        const index = updatedInvoices.findIndex(
          (invoice) => invoice.id === data.id,
        );
        if (index !== -1) {
          updatedInvoices[index] = newInvoiceData;
        }
      } else {
        updatedInvoices = [newInvoiceData, ...updatedInvoices];
      }

      setState({ allInvoices: updatedInvoices });
      setFormData(emptyForm);
<<<<<<< HEAD
      setState({ isInvoiceModalOpen: false });
=======
      setInvoiceDetails([emptyInvoiceDetails]);
      setState({ isInvoiceModalOpen: false, isEditModalOpen: false });

      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newInvoiceData),
      });
      console.log("response", response);
>>>>>>> cf401ec
    }
    setPaymentTermMissing(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number,
    valueToBeChanged?: "price" | "quantity",
  ) => {
    const { name, value } = e.target;

    if (index !== undefined) {
      const updatedItems = [...formData.items];

      if (valueToBeChanged) {
        updatedItems[index] = {
          ...updatedItems[index],
          [valueToBeChanged]: value === "0" ? "" : value,
        };
      } else {
        updatedItems[index] = {
          ...updatedItems[index],
          [name as keyof IInvoiceDetails]: value,
        };
      }

      setFormData({ items: updatedItems });
    } else {
      setFormData({ [name]: value });
    }
  };

  const handleDelete = (index: number) => {
    if (formData.items.length > 1 && index !== 0) {
      const updatedInvoiceDetails = formData.items.filter(
        (_, i) => i !== index,
      );
      setFormData({ items: updatedInvoiceDetails });
    }
  };

  const handleDiscard = () => {
    setFormData(emptyForm);
<<<<<<< HEAD
    setState({ isInvoiceModalOpen: false });
=======
    setInvoiceDetails([emptyInvoiceDetails]);
    setState({ isInvoiceModalOpen: false, isEditModalOpen: false });
>>>>>>> cf401ec
  };

  const calculateTotal = () => {
    const updatedItems = formData.items.map((item) => ({
      ...item,
      total: +item.quantity * +item.price,
    }));
    setFormData({ items: updatedItems });
<<<<<<< HEAD
=======

>>>>>>> cf401ec
    return updatedItems;
  };

  useEffect(() => {
    calculateTotal();
<<<<<<< HEAD
  }, []);
=======
  }, [invoiceDetails]);
>>>>>>> cf401ec

  return (
    <ModalWrapper
      onClose={onClose}
      isOpen={isOpen}
      style={
        "fixed left-0 top-[5rem] desktop:top-0 desktop:bottom-0 desktop:max-h-screen desktop:left-24"
      }
    >
      <form
        className="bg-white dark:bg-themeColorBg sm:rounded-r-3xl p-6 xs:p-16 relative max-w-[38.75rem] overflow-y-scroll "
        onSubmit={handleSubmit}
      >
        <GoBack />
        <h1 className="dark:text-white text-3xl font-bold mb-[3rem]">
          {formHeading}
        </h1>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill from</p>
          <InputField
            labelName={"Street Address"}
            name={"address"}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-[3rem]">
          <InputField
            labelName={"City"}
            name={"city"}
            onChange={handleInputChange}
            value={formData.city}
          />
          <InputField
            labelName={"Post Code"}
            name={"postCode"}
            onChange={handleInputChange}
            value={formData.postCode}
          />
          <InputField
            labelName={"Country"}
            name={"country"}
            onChange={handleInputChange}
            value={formData.country}
          />
        </div>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill to</p>
          <InputField
            labelName={"Client's Name"}
            name={"clientName"}
            onChange={handleInputChange}
            value={formData.clientName}
          />
          <InputField
            labelName={"Client's Email"}
            name={"clientEmail"}
            onChange={handleInputChange}
            value={formData.clientEmail}
          />
          <InputField
            labelName={"Street Address"}
            id={"bill-to"}
            name={"clientAddress"}
            onChange={handleInputChange}
            value={formData.clientAddress}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-4">
          <InputField
            labelName={"City"}
            id={"bill-to"}
            name={"clientCity"}
            onChange={handleInputChange}
            value={formData.clientCity}
          />
          <InputField
            labelName={"Post Code"}
            id={"bill-to"}
            name={"clientPostCode"}
            onChange={handleInputChange}
            value={formData.clientPostCode}
          />
          <InputField
            labelName={"Country"}
            id={"bill-to"}
            name={"clientCountry"}
            onChange={handleInputChange}
            value={formData.clientCountry}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-6">
          <div>
            <label
              className="text-mediumPurple dark:text-white"
              htmlFor={"invoice-date"}
            />
            <div className="relative flex items-center ">
              <InputField
                labelName={"Invoice Date"}
                style={"w-full"}
                type={"date"}
                name={"invoiceDate"}
                min="2023-01-01"
                max={new Date().toISOString().split("T")[0]}
                onChange={handleInputChange}
                value={formData.invoiceDate}
              />
            </div>
          </div>
          <div className="relative">
            <p className="mb-3 text-mediumPurple dark:text-white font-light">
              Payment Terms
            </p>
            <div
              className={`border items-center flex justify-between  rounded-md py-4 h-[3rem] w-full 
                dark:bg-themeColor hover:border-heavyPurple px-4 ${
                  paymentTermMissing ? "border-red-700" : "border-lightPurple"
                }`}
              onClick={() => setIsVisible((prevState) => !prevState)}
            >
              <span className="font-medium">
                {formData.paymentTerms === 0
                  ? "Select"
                  : formData.paymentTerms === 1
                  ? `${formData.paymentTerms} day`
                  : `${formData.paymentTerms} days`}
              </span>
              <img
                src={"/assets/icon-arrow-down.svg"}
                alt="arrow-img"
                className={`${isVisible && "rotate-180 "} duration-300 ml-2`}
              />
              <PaymentTerms
                handleSelectPaymentTerm={handleSelectPaymentTerm}
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
        <div>
          <InputField
            labelName={"Project Description"}
            name="projectDescription"
            onChange={handleInputChange}
            value={formData.projectDescription}
          />
        </div>
        <div>
          <h2 className="text-gray-500 dark:text-heavyPurple font-medium text-2xl mb-4">
            Item List
          </h2>
          {formData.items.map((invoiceItem, index) => (
            <ItemList
              key={`${index}`}
              handleInputChange={handleInputChange}
              name={invoiceItem.name}
              quantity={invoiceItem.quantity}
              price={invoiceItem.price}
              total={invoiceItem.total}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
        <Button
          style={
            "bg-purple-50 hover:bg-blue-100 text-mediumPurple font-medium mb-[2.875rem] dark:bg-buttonPurple dark:text-gray-300 dark:hover:bg-purple-500"
          }
          onClick={handleAddInvoiceDetails}
        >
          + Add New Item
        </Button>
        <div
          className={`grid  ${
            data ? "grid-cols-1 xxs:grid-cols-2" : "grid-cols-1 xxs:grid-cols-3"
          } gap-2`}
        >
          <Button
            style={
              data
                ? "bg-neutral-700 hover:bg-neutral-600 text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-200 hover:text-zinc-50"
                : "bg-purple-50 hover:bg-blue-100 text-mediumPurple w-full xxs:max-w-[6rem] dark:hover:bg-neutral-800 dark:hover:text-white"
            }
            onClick={() => {
              const confirmed = confirm("Are you sure?");
              if (confirmed) handleDiscard();
            }}
          >
            {data ? "Cancel" : "Discard"}
          </Button>
          {!data && (
            <Button
              style={
                "bg-neutral-700 hover:bg-neutral-600 text-gray-400 xxs:ml-auto dark:hover:bg-neutral-800 dark:hover:text-gray-200 hover:text-zinc-50"
              }
              onClick={(e) => handleSubmit(e, "draft")}
            >
              Save as Draft
            </Button>
          )}

          <Button
            style={"bg-buttonPurple hover:bg-purple-500 text-white"}
            type={"submit"}
          >
            {data ? "Save Changes" : "Save & Send"}
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default InvoiceForm;
