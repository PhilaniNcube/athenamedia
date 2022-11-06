interface ButtonProps {
  children: string;
}

export const Button = ({children}:ButtonProps ) => {
  return (
    <button className="bg-peach text-white hover:bg-light-peach px-8 py-3 max-w-[200px] transition-all duration-300 text-center  font-medium text-lg rounded-lg">
      {children}
    </button>
  );
};

export const LightButton = ({children}:ButtonProps ) => {
  return (
    <button className="bg-slate-50 text-slate-700 hover:text-white px-8 py-3 max-w-[200px] transition-all duration-300 text-center hover:bg-light-peach font-medium text-lg rounded-lg">
      {children}
    </button>
  );
};

