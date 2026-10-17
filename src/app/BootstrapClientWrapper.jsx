// components/BootstrapClientWrapper.tsx
'use client';

import React from 'react';
import { useEffect } from 'react';

export default function BootstrapClientWrapper({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return <>{children}</>;
}