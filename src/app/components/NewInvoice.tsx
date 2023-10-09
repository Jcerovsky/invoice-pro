import React, { useContext, useEffect, useState } from "react";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import ItemList from "@/app/components/ItemList";
import ModalWrapper from "@/app/components/ModalWrapper";
import GoBack from "@/app/components/GoBack";
import PaymentTerms from "@/app/components/PaymentTerms";
import { calculateDueDate } from "@/app/utils/calculateDueDate";
import { useObjectState } from "@/app/hooks/useObjectState";
import { Context } from "@/app/context/Context";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
  items: IInvoiceDetails[];
}

interface IInvoiceDetails {
  itemName: string;
  itemQuantity: string;
  itemPrice: string;
  itemTotal: number;
}

const emptyInvoiceDetails = {
  itemName: "",
  itemQuantity: "1",
  itemPrice: "",
  itemTotal: 0,
};

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
  items: [emptyInvoiceDetails],
};

function NewInvoice({ isOpen, onClose }: IModalProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [paymentTerm, setPaymentTerm] = useState<string>("Select");
  const { isInvoiceModalOpen, setState } = useContext(Context)!;

  const [invoiceDetails, setInvoiceDetails] = useState<Array<IInvoiceDetails>>([
    emptyInvoiceDetails,
  ]);

  const [formData, setFormData] = useObjectState<IFormProps>(emptyForm);

  const handleAddInvoiceDetails = () => {
    const updatedItems = [...invoiceDetails, emptyInvoiceDetails];
    setInvoiceDetails(updatedItems);
    setFormData({ items: updatedItems });
  };

  const handleSelect = (value: string) => {
    setPaymentTerm(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number,
    valueToBeChanged?: "itemPrice" | "itemQuantity",
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
      setInvoiceDetails(updatedItems);
    } else {
      setFormData({ [name]: value });
    }
  };

  const handleDelete = (index: number) => {
    if (invoiceDetails.length > 1 && index !== 0) {
      const updatedInvoiceDetails = invoiceDetails.filter(
        (_, i) => i !== index,
      );
      setInvoiceDetails(updatedInvoiceDetails);
      setFormData({ items: updatedInvoiceDetails });
    }
  };

  const handleDiscard = () => {
    setFormData(emptyForm);
    setInvoiceDetails([emptyInvoiceDetails]);
    setPaymentTerm("Select");
    setState({ isInvoiceModalOpen: false });
  };

  const calculateTotal = () => {
    const updatedItems = invoiceDetails.map((item) => ({
      ...item,
      itemTotal: +item.itemQuantity * +item.itemPrice,
    }));
    setInvoiceDetails(updatedItems);
  };

  useEffect(() => {
    calculateTotal();
  }, [formData]);

  const paymentTermValue =
    paymentTerm === "Select"
      ? paymentTerm
      : paymentTerm === "1"
      ? `${paymentTerm} day`
      : `${paymentTerm} days`;

  return (
    <ModalWrapper onClose={onClose} isOpen={isOpen}>
      <form
        className="bg-white dark:bg-themeColorBg sm:rounded-r-3xl p-6 xs:p-16 relative max-w-[38.75rem] overflow-y-scroll "
        onSubmit={handleSubmit}
      >
        <GoBack />
        <h1 className="dark:text-white text-3xl font-bold mb-[3rem]">
          New Invoice
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
                onChange={handleInputChange}
                value={formData.invoiceDate}
              />
            </div>
          </div>
          <div className="relative">
            <p className="mb-3 text-mediumPurple font-light">Payment Terms</p>
            <div
              className="border items-center flex justify-between border-lightPurple rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4 "
              onClick={() => setIsVisible((prevState) => !prevState)}
            >
              <span className="font-semibold">{paymentTermValue}</span>
              <img
                src={"/assets/icon-arrow-down.svg"}
                alt="arrow-img"
                className={`${isVisible && "rotate-180 "} duration-300 ml-2`}
              />
              <PaymentTerms handleSelect={handleSelect} isVisible={isVisible} />
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
          <h2 className="text-gray-500 font-medium text-2xl mb-4">Item List</h2>
          {invoiceDetails.map((invoiceItem, index) => (
            <ItemList
              key={`${index}`}
              handleInputChange={handleInputChange}
              name={invoiceItem.itemName}
              quantity={invoiceItem.itemQuantity}
              price={invoiceItem.itemPrice}
              total={invoiceItem.itemTotal}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
        <Button
          style={
            "bg-purple-50 hover:bg-blue-100 text-mediumPurple mb-[2.875rem] dark:bg-buttonPurple dark:text-gray-300 dark:hover:bg-purple-500"
          }
          onClick={handleAddInvoiceDetails}
        >
          + Add New Item
        </Button>
        <div className="grid grid-cols-3 gap-2">
          <Button
            style={
              "bg-purple-50 hover:bg-blue-100 text-mediumPurple max-w-[6rem] dark:hover:bg-neutral-800 dark:hover:text-white"
            }
            onClick={() => {
              const confirmed = confirm("Are you sure?");
              if (confirmed) handleDiscard();
            }}
          >
            Discard
          </Button>
          <Button
            style={
              "bg-neutral-700 hover:bg-neutral-600 text-gray-400 ml-auto dark:hover:bg-neutral-800 dark:hover:text-gray-200"
            }
          >
            Save as Draft
          </Button>
          <Button
            style={"bg-buttonPurple hover:bg-purple-500 text-white"}
            type={"submit"}
          >
            Save & Send
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default NewInvoice;
