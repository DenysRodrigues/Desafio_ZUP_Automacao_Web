package br.ce.desafiozup.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AdicionarCarrinhoSteps {

	private WebDriver driver;

	@Dado("^que acesso o site americanas$")
	public void queAcessoOSiteAmericanas() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/home/denys/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.americanas.com.br/");
	}

	@Quando("^faco a busca do produto \"([^\"]*)\"$")
	public void faco_a_busca_do_produto(String arg1) throws Throwable {
		driver.findElement(By.id("h_search-input")).sendKeys(arg1);
		driver.findElement(By.id("h_search-btn")).click();
		Assert.assertEquals(arg1, driver.findElement(By.xpath("//h1[@class='h1 page-title']")).getText());

	}

	@Quando("^clico em pesquisar$")
	public void clico_em_pesquisar(String arg1) throws Throwable {
		driver.findElement(By.id("h_search-btn")).click();
		String produtoescolhido = driver.findElement(By.xpath("//h1[@class='h1 page-title']")).getText();
		Assert.assertEquals(arg1, produtoescolhido);

	}

	@Então("^escolho um produto na lista$")
	public void escolho_um_produto_na_lista() throws Throwable {
		driver.findElement(By.xpath(
				"//div[@class='row product-grid no-gutters main-grid']//div[1]//div[1]//div[2]//a[1]//section[1]//div[2]//div[1]//h2[1]"))
				.click();
	}

	@Então("^adiciono no carrinho$")
	public void adiciono_no_carrinho() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.id("btn-buy")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@class='GridUI-wcbvwm-0 jPoUcY ViewUI-sc-1ijittn-6 iXIDWU']")).click();
	}

	@Então("^valido o produto no carrinho \"([^\\\"]*)\"$")
	public void valido_o_produto_no_carrinho(String produto) throws Throwable {
		String textocesta = driver.findElement(By.xpath("//h2[@class='page-title col-xs-7']")).getText();
		Assert.assertEquals("minha cesta", textocesta);
		String nomeproduto = driver.findElement(By.xpath("//a[@class='link-default clearfix']")).getText();
		Assert.assertEquals(produto, nomeproduto);
	}

	@Então("^remover um produto$")
	public void removerUmProduto() throws Throwable {
		driver.findElement(By.xpath("//a[@class='basket-productRemoveAct --desktop']")).click();
	}

	@After
	@Então("^Fechar o browser$")
	public void fechar_o_browser() throws Throwable {
		driver.quit();
	}

}
