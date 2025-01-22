import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        //  특정 경로에 PPR을 사용
        ppr: 'incremental'
    }
};

export default nextConfig;
