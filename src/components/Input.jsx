import { forwardRef } from "react";

export const Input = forwardRef(
  ({ type, label, rows = 0, ...theRestOfProps }, ref) => {
    const isTextArea = !type && rows > 0;
    const classes =
      "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return (
      <p className="flex flex-col gap-1 my-4">
        <label
          htmlFor={label}
          className="text-sm font-bold uppercase text-stone-500"
        >
          {label}
        </label>
        {isTextArea ? (
          <textarea
            id={label}
            ref={ref}
            type={type}
            className={classes}
            rows={rows}
            {...theRestOfProps}
          />
        ) : (
          <input
            id={label}
            ref={ref}
            type={type}
            className={classes}
            {...theRestOfProps}
          />
        )}
      </p>
    );
  }
);
