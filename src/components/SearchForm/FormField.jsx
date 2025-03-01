import { Controller } from 'react-hook-form';

const FormField = ({ control, label, name, Component }) => {
  return (
    <div>
      <p className="bm-1 font-bold">{label}</p>
      <Controller
        control={control}
        name={name}
        // render={({ field: onChange, value, name }) => {
        //   return (
        //     <Component
        //       onChange={onChange}
        //       value={value}
        //       name={name}
        //       control={control}
        //     />
        //   );
        // }}
        render={({ field }) => <Component {...field} control={control} />}
      />
    </div>
  );
};

export default FormField;
