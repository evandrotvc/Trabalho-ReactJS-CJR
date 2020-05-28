import React from "react";

export const Form = ({ onSubmit, children }) => {
  const [pending, setPending] = React.useState(false);

  const send = (event) => {
    event.preventDefault();
    const data = {};

    for (const input of Array.from(event.target.elements)) {
      if (!input.name) continue;

      data[input.name] = input.value;
    }
    setPending(true);
    onSubmit(data).finally(() => setPending(false));
  };

  return (
    <RequestContext.Provider value={pending}>
      <form onSubmit={send}>{children}</form>
    </RequestContext.Provider>
  );
};

const RequestContext = React.createContext(null);

export const Submit = ({ children }) => {
  const pending = React.useContext(RequestContext);

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : children}
    </button>
  );
};

export const Input = ({ name, type, label, defaultValue }) => {
  const pending = React.useContext(RequestContext);

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        disabled={pending}
        defaultValue={defaultValue}
      />
    </div>
  );
};