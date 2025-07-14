import { useMediaQuery } from 'react-responsive';

export function useMobile() {
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    return mobile;
}
