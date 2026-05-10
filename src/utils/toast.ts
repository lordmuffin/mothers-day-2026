import toast from 'react-hot-toast';

export const showSuccess = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: '1rem',
      background: 'var(--card)',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
    },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    style: {
      borderRadius: '1rem',
      background: 'var(--card)',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
    },
  });
};