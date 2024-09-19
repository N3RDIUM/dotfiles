-- Miscellaneous stuff
vim.cmd("set tabstop=4")
vim.cmd("set shiftwidth=4")
vim.cmd("set softtabstop=4")
vim.cmd("set relativenumber")

-- Startup stuff
vim.cmd("COQnow --shut-up")

-- Quit keybinds
vim.keymap.set('n', '<space>qq', ':qa<CR>', {})
vim.keymap.set('n', '<space>qf', ':qa!<CR>', {})
vim.keymap.set('n', '<space>qc', ':q<CR>', {})

-- Barbar keybinds
local opts = { noremap = true, silent = true }
vim.keymap.set('n', '<A-,>', '<Cmd>BufferPrevious<CR>', opts)
vim.keymap.set('n', '<A-.>', '<Cmd>BufferNext<CR>', opts)
vim.keymap.set('n', '<A-l>', '<Cmd>BufferMovePrevious<CR>', opts)
vim.keymap.set('n', '<A-;>', '<Cmd>BufferMoveNext<CR>', opts)
vim.keymap.set('n', '<A-1>', '<Cmd>BufferGoto 1<CR>', opts)
vim.keymap.set('n', '<A-2>', '<Cmd>BufferGoto 2<CR>', opts)
vim.keymap.set('n', '<A-3>', '<Cmd>BufferGoto 3<CR>', opts)
vim.keymap.set('n', '<A-4>', '<Cmd>BufferGoto 4<CR>', opts)
vim.keymap.set('n', '<A-5>', '<Cmd>BufferGoto 5<CR>', opts)
vim.keymap.set('n', '<A-6>', '<Cmd>BufferGoto 6<CR>', opts)
vim.keymap.set('n', '<A-7>', '<Cmd>BufferGoto 7<CR>', opts)
vim.keymap.set('n', '<A-8>', '<Cmd>BufferGoto 8<CR>', opts)
vim.keymap.set('n', '<A-9>', '<Cmd>BufferGoto 9<CR>', opts)
vim.keymap.set('n', '<A-0>', '<Cmd>BufferLast<CR>', opts)
vim.keymap.set('n', '<A-p>', '<Cmd>BufferPin<CR>', opts)
vim.keymap.set('n', '<A-c>', '<Cmd>BufferClose<CR>', opts)
vim.keymap.set('n', '<C-p>', '<Cmd>BufferPick<CR>', opts)
vim.keymap.set('n', '<Space>bn', '<Cmd>BufferOrderByBufferNumber<CR>', opts)
vim.keymap.set('n', '<Space>ba', '<Cmd>BufferOrderByName<CR>', opts)
vim.keymap.set('n', '<Space>bd', '<Cmd>BufferOrderByDirectory<CR>', opts)
vim.keymap.set('n', '<Space>bl', '<Cmd>BufferOrderByLanguage<CR>', opts)
vim.keymap.set('n', '<Space>bw', '<Cmd>BufferOrderByWindowNumber<CR>', opts)

-- Coq keybinds
vim.api.nvim_set_keymap('i', '<Esc>', [[pumvisible() ? "\<C-e><Esc>" : "\<Esc>"]], { expr = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-c>', [[pumvisible() ? "\<C-e><C-c>" : "\<C-c>"]], { expr = true, silent = true })
vim.api.nvim_set_keymap('i', '<BS>', [[pumvisible() ? "\<C-e><BS>" : "\<BS>"]], { expr = true, silent = true })
vim.api.nvim_set_keymap(
    "i",
    "<CR>",
    [[pumvisible() ? (complete_info().selected == -1 ? "\<C-e><CR>" : "\<C-y>") : "\<CR>"]],
    { expr = true, silent = true }
)
vim.api.nvim_set_keymap('i', '<Tab>', [[pumvisible() ? "\<C-n>" : "\<Tab>"]], { expr = true, silent = true })
vim.api.nvim_set_keymap('i', '<S-Tab>', [[pumvisible() ? "\<C-p>" : "\<BS>"]], { expr = true, silent = true })

-- Dashboard keybinds
vim.keymap.set('n', '<space>d', ':Dashboard <CR>', {})

-- Neotree keybinds
vim.keymap.set('n', '<space>nt', ':Neotree toggle <CR>', {})

-- Telescope keybinds
vim.keymap.set('n', '<space>tf', ':Telescope find_files <CR>', {})
vim.keymap.set('n', '<space>tg', ':Telescope live_grep <CR>', {})
vim.keymap.set('n', '<space>tb', ':Telescope file_browser <CR>', {})
vim.keymap.set('n', '<space>tp', ':Telescope project <CR>', {})
