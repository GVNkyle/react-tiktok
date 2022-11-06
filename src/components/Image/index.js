import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images'
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    }

    return (
        <img ref={ref} className={classNames(styles.wrapper, className)} src={fallback || src} alt={alt} {...props} onError={handleError} />
    );
})

Image.propTypes = {
    src : PropTypes.string,
    className : PropTypes.string,
    fallback: PropTypes.string,
    alt: PropTypes.string,
}

export default Image;