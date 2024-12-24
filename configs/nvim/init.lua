-- Thanks, theprimeagen!
vim.opt.nu = true
vim.opt.relativenumber = true

vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

vim.opt.smartindent = true

vim.opt.wrap = false

vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
vim.opt.undofile = true

vim.opt.hlsearch = false
vim.opt.incsearch = true

vim.opt.termguicolors = true

vim.opt.scrolloff = 8
vim.opt.signcolumn = "yes"
vim.opt.isfname:append("@-@")

vim.g.mapleader = " "

-- lazy.nvim setup
require("config.lazy")

-- TODO: Move the require()s to their respective files.
vim.o.background = "dark"
require("gruvbox").setup({
  terminal_colors = true, -- add neovim terminal colors
  undercurl = true,
  underline = true,
  bold = true,
  italic = {
    strings = true,
    emphasis = true,
    comments = true,
    operators = false,
    folds = true,
  },
  strikethrough = true,
  invert_selection = false,
  invert_signs = false,
  invert_tabline = false,
  invert_intend_guides = false,
  inverse = true, -- invert background for search, diffs, statuslines and errors
  contrast = "soft", -- can be "hard", "soft" or empty string
  palette_overrides = {},
  overrides = {},
  dim_inactive = false,
  transparent_mode = false,
})
vim.cmd("colorscheme gruvbox") -- There's a better way to do this, directly from Lazy.

require('lualine').setup {
  options = {
    icons_enabled = true,
    theme = 'gruvbox_dark',
    component_separators = { left = '', right = ''},
    section_separators = { left = '', right = ''},
    disabled_filetypes = {
      statusline = {},
      winbar = {},
    },
    ignore_focus = {},
    always_divide_middle = true,
    always_show_tabline = true,
    globalstatus = false,
    refresh = {
      statusline = 100,
      tabline = 100,
      winbar = 100,
    }
  },
  sections = {
    lualine_a = {'mode'},
    lualine_b = {'branch', 'diff', 'diagnostics'},
    lualine_c = {'filename'},
    lualine_x = {'encoding', 'fileformat', 'filetype'},
    lualine_y = {'progress'},
    lualine_z = {'location'}
  },
  inactive_sections = {
    lualine_a = {},
    lualine_b = {},
    lualine_c = {'filename'},
    lualine_x = {'location'},
    lualine_y = {},
    lualine_z = {}
  },
  tabline = {},
  winbar = {},
  inactive_winbar = {},
  extensions = {}
}

vim.o.formatexpr = "v:lua.require'conform'.formatexpr()"

-- Custom keymaps!
local builtin = require('telescope.builtin')

vim.keymap.set('n', '<leader>fn', ':Neotree filesystem toggle right', { desc = 'Neotree filesystem' })
vim.keymap.set('n', '<leader>ff', builtin.find_files, { desc = 'Telescope find files' })
vim.keymap.set('n', '<leader>fg', builtin.live_grep, { desc = 'Telescope live grep' })

vim.keymap.set('n', '<leader>bn', ':Neotree buffers reveal float', { desc = 'Neotree buffers' })
vim.keymap.set('n', '<leader>bf', builtin.buffers, { desc = 'Telescope buffers' })
vim.keymap.set('n', '<leader>bo', builtin.oldfiles, { desc = 'Telescope old buffers' })

vim.keymap.set('n', '<leader>gn', ':Neotree buffers reveal float', { desc = 'Neotree git status' })
vim.keymap.set('n', '<leader>gc', builtin.git_commits, { desc = 'Telescope git commits' })
vim.keymap.set('n', '<leader>gs', builtin.git_commits, { desc = 'Telescope git status' })
vim.keymap.set('n', '<leader>gS', builtin.git_commits, { desc = 'Telescope git stash' })

vim.keymap.set('n', '<leader>ls', builtin.git_commits, { desc = 'Telescope treesitter symbols' })

vim.keymap.set('n', '<leader>cf', builtin.commands, { desc = 'Telescope commands' })
vim.keymap.set('c', '<C-j>', builtin.command_history, { desc = 'Telescope command history' })

