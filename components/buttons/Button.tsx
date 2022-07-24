import Spinner from 'components/forms/spinner/Spinner';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  loading = false,
  children,
  ...buttonProps
}) => {
  const variantClass =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-75'
      : 'bg-white text-blue-500 disabled:bg-grey-100 border border-blue-500 disabled:border-grey-100';
  return (
    <button
      type="submit"
      className={`border-1 p-2 px-4 sm:px-6 rounded w-auto ${variantClass} flex items-center justify-between gap-2 my-6`}
      {...buttonProps}
    >
      {children} {loading && <Spinner color="text-white" />}
    </button>
  );
};

export default Button;
