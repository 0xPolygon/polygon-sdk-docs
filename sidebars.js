module.exports = {
  develop: [
    'overview',
    'cli-commands',
    {
      type: 'category',
      label: 'How-tos',
      items: [
        {
          type: 'category',
          label: 'How to setup IBFT',
          items: [
            'how-tos/howto-setup-ibft/howto-set-ibft-locally',
            'how-tos/howto-setup-ibft/howto-set-ibft-on-the-cloud'
          ]
        },
        'how-tos/howto-query-operator',
        'how-tos/howto-query-json-rpc',
        'how-tos/howto-backup-restore',
        'how-tos/howto-manage-private-keys',
        'how-tos/howto-report-bug',
        'how-tos/howto-propose-feature',
        'how-tos/howto-run-loadbot'
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'reference/architecture',
        {
          type: 'category',
          label: 'Modules',
          items: [
            'reference/modules/blockchain',
            'reference/modules/minimal',
            'reference/modules/networking',
            'reference/modules/state',
            'reference/modules/txpool',
            'reference/modules/json-rpc',
            'reference/modules/consensus',
            'reference/modules/storage',
            'reference/modules/types',
            'reference/modules/other-modules'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/ethereum-state']
    },
    {
      type: 'category',
      label: 'ChainBridge',
      items: [
        'chainbridge/overview',
        {
          type: 'category',
          label: 'Setup',
          items: [
            'chainbridge/setup/outline',
            'chainbridge/setup/accounts',
            'chainbridge/setup/setup-polygon-sdk',
            'chainbridge/setup/deploy-contracts',
            'chainbridge/setup/setup-relayer',
            'chainbridge/setup/setup-erc20-transfer',
            'chainbridge/setup/setup-erc721-transfer',
            'chainbridge/setup/roles-in-bridge'
          ]
        }
      ]
    }
  ]
};
