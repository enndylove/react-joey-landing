import React from 'react';
import Content from "./assets/Content";

import '../../styles/xtrack.scss';

export default class XTrack extends React.Component<{}, {}> {
    render() {
        return (
            <section className="xtrack w-max max-w-full overflow-hidden">
                <Content
                    text="Visual design for digital experiences"
                />
            </section>
        )
    }
}