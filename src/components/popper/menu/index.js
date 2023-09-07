import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children;
            return (
                <MenuItem
                    onClick={() => {
                        if (isChildren) {
                            setHistory((prey) => [...prey, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };
    return (
        <Tippy
            placement="bottom-end"
            delay={[0, 500]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory((prey) => prey.slice(0, history.length - 1));
                                }}
                                title={current.title}
                            />
                        )}
                        {<div className={cx('menu-body')}>{renderItems()}</div>}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prey) => prey.slice(0, 1));
            }}
        >
            <span>{children}</span>
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
