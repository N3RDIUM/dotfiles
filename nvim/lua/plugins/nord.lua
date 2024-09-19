return {
    "shaunsingh/nord.nvim", 
    name="nord",
    config=function()
        vim.g.nord_contrast = true
        vim.g.nord_borders = true
        vim.g.nord_disable_background = false
        vim.g.nord_italic = true
        vim.g.nord_uniform_diff_background = false
        vim.g.nord_bold = true
        vim.cmd[[colorscheme nord]]
    end
}